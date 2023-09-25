import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountRepository } from './account.repository';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { LocalStrategy } from '../strategy/local.strategy';

describe('AccountController', () => {
  let controller: AccountController;
  let service: AccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [
        AccountService,
        AccountRepository,
        JwtStrategy,
        LocalStrategy,
      ],
    }).compile();

    service = module.get<AccountService>(AccountService);
    controller = module.get<AccountController>(AccountController);
  });

  it('should be defined', () => {});
});
