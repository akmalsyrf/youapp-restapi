import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  getUserByAccountId(accountId: string) {
    return this.userRepository.findOne({ accountId });
  }
  createUser(request: CreateUserRequest) {
    return this.userRepository.create(request);
  }
}
