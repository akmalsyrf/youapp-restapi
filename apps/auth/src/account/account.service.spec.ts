import * as bcrypt from 'bcrypt';
import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { getModelToken } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Account } from './schema/account.schema';

describe('AccountService', () => {
  let service: AccountService;
  let model: Model<Account>;

  const mockAccount = async (
    username = 'example-username',
    email = 'example@yopmail.com',
    password = 'example',
  ): Promise<any> => ({
    username,
    email,
    passwordHash: await bcrypt.hash(password, 10),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountService,
        {
          provide: getModelToken('accounts'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockAccount()),
            constructor: jest.fn().mockResolvedValue(mockAccount()),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AccountService>(AccountService);
    model = module.get<Model<Account>>(getModelToken('accounts'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be registered new account', async () => {
    const mockAccountId = new mongoose.Types.ObjectId();
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        _id: mockAccountId,
        username: 'example-username',
        email: 'example@yopmail.com',
        password: 'example',
      }),
    );
    const newAccount = await service.createAccount({
      username: 'example-username',
      email: 'example@yopmail.com',
      password: 'example',
    });
    expect(newAccount).toEqual({
      _id: mockAccountId, // Ensure the ObjectId matches
      username: 'example-username',
      email: 'example@yopmail.com',
      password: 'example',
    });
  });
});
