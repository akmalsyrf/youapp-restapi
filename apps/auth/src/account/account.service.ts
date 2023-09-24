import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AccountRepository } from './account.repository';
import { CreateAccountRequest } from './dto/register-account.request';
import { Account } from './schema/account.schema';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async createAccount(request: CreateAccountRequest) {
    await this.validateCreateAccountRequest(request);
    const account = await this.accountRepository.create({
      ...request,
      passwordHash: await bcrypt.hash(request.password, 10),
    });
    return account;
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
