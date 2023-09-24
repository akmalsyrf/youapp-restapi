import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthJwtModule, DatabaseModule, RmqModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Horoscope, HoroscopeSchema } from './schema/hororscope.schema';
import { Zodiac, ZodiacSchema } from './schema/zodiac.schema';
import { HoroscopeRepository } from './repository/horoscope.repository';
import { ZodiacRepository } from './repository/zodiac.repository';
import { MasterController } from './master.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        MS_MASTER_PORT: Joi.number().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_MASTER_QUEUE: Joi.string().required(),
        RABBIT_MQ_AUTH_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/master/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: Horoscope.name, schema: HoroscopeSchema },
      { name: Zodiac.name, schema: ZodiacSchema },
    ]),
    RmqModule,
    AuthJwtModule,
  ],
  controllers: [MasterController],
  providers: [MasterService, HoroscopeRepository, ZodiacRepository],
})
export class MasterModule {}
