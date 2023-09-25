import { AuthJwtModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Horoscope, HoroscopeSchema } from './schema/hororscope.schema';
import { HoroscopeController } from './horoscope.controller';
import { HoroscopeService } from './horoscope.service';
import { HoroscopeRepository } from './horoscope.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Horoscope.name, schema: HoroscopeSchema },
    ]),
    RmqModule,
    AuthJwtModule,
  ],
  controllers: [HoroscopeController],
  providers: [HoroscopeService, HoroscopeRepository],
  exports: [HoroscopeService],
})
export class HoroscopeModule {}
