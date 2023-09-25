import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountRequest } from '../dto/register-account.request';
import { AuthResponse } from '../dto/auth.response';

@Controller('api')
export class AccountController {
  constructor(private readonly usersService: AccountService) {}

  @Post('register')
  async createAccount(
    @Body() request: CreateAccountRequest,
  ): Promise<AuthResponse> {
    const { token, expires } = await this.usersService.createAccount(request);

    return {
      accessToken: token,
      expiresIn: expires,
    };
  }
}
