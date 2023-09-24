import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountRequest } from './dto/register-account.request';

@Controller('api')
export class AccountController {
  constructor(private readonly usersService: AccountService) {}

  @Post('register')
  async createAccount(@Body() request: CreateAccountRequest) {
    return this.usersService.createAccount(request);
  }
}
