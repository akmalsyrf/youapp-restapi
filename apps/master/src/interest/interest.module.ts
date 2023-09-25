import { AuthJwtModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Interest, InterestSchema } from './schema/interest.schema';
import { InterestController } from './interest.controller';
import { InterestService } from './interest.service';
import { InterestRepository } from './interest.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Interest.name, schema: InterestSchema },
    ]),
    RmqModule,
    AuthJwtModule,
  ],
  controllers: [InterestController],
  providers: [InterestService, InterestRepository],
  exports: [InterestService],
})
export class InterestModule {}
