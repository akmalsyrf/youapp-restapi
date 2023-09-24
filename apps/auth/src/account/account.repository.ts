import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { AbstractRepository } from '@app/common';
import { Account } from './schema/account.schema';

@Injectable()
export class AccountRepository extends AbstractRepository<Account> {
  protected readonly logger = new Logger(AccountRepository.name);

  constructor(
    @InjectModel(Account.name) accountModel: Model<Account>,
    @InjectConnection() connection: Connection,
  ) {
    super(accountModel, connection);
  }
}
