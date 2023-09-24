import { Controller, Post } from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateHoroscopeRequest } from './dto/create-horoscope.request';
import { CreateZodiacRequest } from './dto/create-zodiac.request';

@Controller()
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Post('horoscope')
  createHoroscope(request: CreateHoroscopeRequest) {
    return this.masterService.createHoroscope(request);
  }

  @Post('zodiac')
  createZodiac(request: CreateZodiacRequest) {
    return this.masterService.createZodiac(request);
  }
}
