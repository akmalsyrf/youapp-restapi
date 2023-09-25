import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Response } from 'express';
import { AuthService } from './auth.service';
import JwtAuthGuard from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Account } from './account/schema/account.schema';
import { CurrentAccount } from '@app/common/auth/current-account.decorator';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentAccount() account: Account,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { token, expires } = await this.authService.login(account);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });

    response.json({
      accessToken: token,
      expiresIn: expires,
    });
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('validate_account')
  async validateUser(@CurrentAccount() account: Account) {
    return account;
  }
}
