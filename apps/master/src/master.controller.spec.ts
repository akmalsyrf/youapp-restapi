import { Test, TestingModule } from '@nestjs/testing';
import { MasterController } from './master.controller';
import { MasterService } from './master.service';

describe('MasterController', () => {
  let controller: MasterController;
  let service: MasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterController],
      providers: [MasterService],
    }).compile();

    service = module.get<MasterService>(MasterService);
    controller = module.get<MasterController>(MasterController);
  });

  it('should be defined', () => {});
});
