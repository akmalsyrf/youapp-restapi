import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateHoroscopeRequest } from './dto/create-horoscope.request';
import { CreateZodiacRequest } from './dto/create-zodiac.request';
import { JwtAuthGuard } from '@app/common';

@Controller('api')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Post('horoscope')
  @UseGuards(JwtAuthGuard)
  createHoroscope(@Body() request: CreateHoroscopeRequest) {
    return this.masterService.createHoroscope(request);
  }

  @Post('zodiac')
  @UseGuards(JwtAuthGuard)
  createZodiac(@Body() request: CreateZodiacRequest) {
    return this.masterService.createZodiac(request);
  }
}
