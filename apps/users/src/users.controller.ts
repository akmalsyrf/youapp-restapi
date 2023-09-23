import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest } from './dto/create-user.request';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user/:accountId')
  async getUserByAccountId(@Param('accountId') accountId: string) {
    return this.usersService.getUserByAccountId(accountId);
  }

  @Post('user')
  async createUser(@Body() request: CreateUserRequest) {
    return this.usersService.createUser(request);
  }
}
