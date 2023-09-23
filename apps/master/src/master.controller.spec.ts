import { Test, TestingModule } from '@nestjs/testing';
import { MasterController } from './master.controller';
import { MasterService } from './master.service';

describe('MasterController', () => {
  let masterController: MasterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MasterController],
      providers: [MasterService],
    }).compile();

    masterController = app.get<MasterController>(MasterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(masterController.getHello()).toBe('Hello World!');
    });
  });
});
