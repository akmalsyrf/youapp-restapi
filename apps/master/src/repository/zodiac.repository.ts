import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Zodiac } from '../schema/zodiac.schema';

@Injectable()
export class ZodiacRepository extends AbstractRepository<Zodiac> {
  protected readonly logger = new Logger(Zodiac.name);

  constructor(
    @InjectModel(Zodiac.name) zodiacModel: Model<Zodiac>,
    @InjectConnection() connection: Connection,
  ) {
    super(zodiacModel, connection);
  }
}
