import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { MasterController } from './master.controller';
import { HoroscopeModule } from './horoscope/horoscope.module';
import { ZodiacModule } from './zodiac/zodiac.module';

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
    HoroscopeModule,
    ZodiacModule,
  ],
  controllers: [MasterController],
  providers: [MasterService],
})
export class MasterModule {}
