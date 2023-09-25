import {
  Inject,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AccountRepository } from './account.repository';
import { CreateAccountRequest } from '../dto/register-account.request';
import { Account } from './schema/account.schema';
import { USER_SERVICE } from '../constants/service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from '../auth.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    @Inject(USER_SERVICE) private userClient: ClientProxy,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async createAccount(request: CreateAccountRequest) {
    await this.validateCreateAccountRequest(request);

    const session = await this.accountRepository.startTransaction();
    try {
      // create account
      const account = await this.accountRepository.create({
        ...request,
        passwordHash: await bcrypt.hash(request.password, 10),
      });

      // create user
      const payloadUser = {
        accountId: account._id,
        about: '',
        interest: [],
      };
      await lastValueFrom(
        this.userClient.emit('account_created', {
          request: payloadUser,
        }),
      );

      // create jwt token
      const tokenPayload: TokenPayload = {
        accountId: account._id.toHexString(),
      };
      const expires = new Date();
      expires.setSeconds(
        expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
      );
      const token = this.jwtService.sign(tokenPayload);

      await session.commitTransaction();
      return { token, expires };
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
  }

  private async validateCreateAccountRequest(request: CreateAccountRequest) {
    let account: Account;
    try {
      account = await this.accountRepository.findOne({
        email: request.email,
      });
    } catch (err) {}

    if (account) {
      throw new UnprocessableEntityException('Email already exists.');
    }
  }

  async validateAccount(email: string, password: string) {
    const account = await this.accountRepository.findOne({ email });
    const passwordIsValid = await bcrypt.compare(
      password,
      account.passwordHash,
    );
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    return account;
  }

  async getAccount(getAccountArgs: Partial<Account>) {
    return this.accountRepository.findOne(getAccountArgs);
  }
}
