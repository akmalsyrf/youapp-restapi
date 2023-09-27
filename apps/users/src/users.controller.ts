import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest } from './dto/create-user.request';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard, RmqService } from '@app/common';
import { CurrentAccount } from '@app/common/auth/current-account.decorator';
import { UpdateUserRequest } from './dto/update-user.request';

@Controller('api')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly rmqService: RmqService,
  ) {}

  @Get('getProfile')
  @UseGuards(JwtAuthGuard)
  async getUserByAccountId(@CurrentAccount() account: any) {
    const accountId = account._id;
    const profile = await this.usersService.getUserByAccountId(accountId);
    return {
      account: {
        username: account.username,
        email: account.email,
      },
      profile,
    };
  }

  @Post('createProfile')
  @UseGuards(JwtAuthGuard)
  async createUser(
    @CurrentAccount() account: any,
    @Body() request: CreateUserRequest,
  ) {
    request.accountId = account._id;
    return this.usersService.createUser(request);
  }

  @Post('updateProfile')
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @CurrentAccount() account: any,
    @Body() request: UpdateUserRequest,
  ) {
    const filters = {
      _id: request._id,
      accountId: account._id,
    };
    return this.usersService.updateUser(filters, request);
  }

  @EventPattern('account_created')
  async handleUserCreate(@Payload() data: any, @Ctx() context: RmqContext) {
    this.usersService.createUser(data.request);
    this.rmqService.ack(context);
  }
}
