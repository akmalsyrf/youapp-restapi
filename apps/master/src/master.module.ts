import { Module } from '@nestjs/common';
import { MasterController } from './master.controller';
import { MasterService } from './master.service';

@Module({
  imports: [],
  controllers: [MasterController],
  providers: [MasterService],
})
export class MasterModule {}
