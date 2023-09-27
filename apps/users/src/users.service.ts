import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async getUserByAccountId(accountId: string) {
    return await this.userRepository.find({
      accountId: { $in: accountId },
    });
  }

  async createUser(request: CreateUserRequest) {
    return await this.userRepository.create(request);
  }

  async updateUser(filters: any, request: any) {
    return await this.userRepository.upsert(filters, request);
  }
}
