import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { HoroscopeService } from './horoscope.service';
import { CreateHoroscopeRequest } from '../dto/create-horoscope.request';

@Controller('api')
export class HoroscopeController {
  constructor(private readonly horoscopeService: HoroscopeService) {}

  @Post('horoscope')
  @UseGuards(JwtAuthGuard)
  createHoroscope(@Body() request: CreateHoroscopeRequest) {
    return this.horoscopeService.createHoroscope(request);
  }
}
