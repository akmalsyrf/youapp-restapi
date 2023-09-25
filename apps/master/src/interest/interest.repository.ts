import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Interest } from './schema/interest.schema';

@Injectable()
export class InterestRepository extends AbstractRepository<Interest> {
  protected readonly logger = new Logger(Interest.name);

  constructor(
    @InjectModel(Interest.name) interestModel: Model<Interest>,
    @InjectConnection() connection: Connection,
  ) {
    super(interestModel, connection);
  }
}
