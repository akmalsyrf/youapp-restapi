import { Test, TestingModule } from '@nestjs/testing';
import { HoroscopeController } from './horoscope.controller';
import { HoroscopeService } from './horoscope.service';

describe('HoroscopeController', () => {
  let controller: HoroscopeController;
  let service: HoroscopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HoroscopeController],
      providers: [HoroscopeService],
    }).compile();

    service = module.get<HoroscopeService>(HoroscopeService);
    controller = module.get<HoroscopeController>(HoroscopeController);
  });

  it('should be defined', () => {});
});
