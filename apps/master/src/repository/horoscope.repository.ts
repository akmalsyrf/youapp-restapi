import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Horoscope } from '../schema/hororscope.schema';

@Injectable()
export class HoroscopeRepository extends AbstractRepository<Horoscope> {
  protected readonly logger = new Logger(Horoscope.name);

  constructor(
    @InjectModel(Horoscope.name) horoscopeModel: Model<Horoscope>,
    @InjectConnection() connection: Connection,
  ) {
    super(horoscopeModel, connection);
  }
}
