import { AuthJwtModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Zodiac, ZodiacSchema } from './schema/zodiac.schema';
import { ZodiacController } from './zodiac.controller';
import { ZodiacService } from './zodiac.service';
import { ZodiacRepository } from './zodiac.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Zodiac.name, schema: ZodiacSchema }]),
    RmqModule,
    AuthJwtModule,
  ],
  controllers: [ZodiacController],
  providers: [ZodiacService, ZodiacRepository],
  exports: [ZodiacService],
})
export class ZodiacModule {}
