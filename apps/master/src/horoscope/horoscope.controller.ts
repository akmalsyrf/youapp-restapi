import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { HoroscopeService } from './horoscope.service';
import { CreateHoroscopeRequest } from '../dto/create-horoscope.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';

@Controller('api')
export class HoroscopeController {
  constructor(private readonly horoscopeService: HoroscopeService) {}

  @Post('horoscope')
  @UseGuards(JwtAuthGuard)
  createHoroscope(@Body() request: CreateHoroscopeRequest) {
    return this.horoscopeService.createHoroscope(request);
  }

  @Get('horoscope')
  @UseGuards(JwtAuthGuard)
  getHoroscopeBy(@Query() request: GetByIdNameRequest) {
    return this.horoscopeService.getHoroscopeBy(request);
  }
}
