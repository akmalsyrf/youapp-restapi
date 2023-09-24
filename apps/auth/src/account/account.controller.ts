import { Body, Controller, Post, Res } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountRequest } from '../dto/register-account.request';

@Controller('api')
export class AccountController {
  constructor(private readonly usersService: AccountService) {}

  @Post('register')
  async createAccount(@Body() request: CreateAccountRequest) {
    const { token, expires } = await this.usersService.createAccount(request);
    
    return {
      accessToken: token,
      expiresIn: expires,
    }
  }
}
