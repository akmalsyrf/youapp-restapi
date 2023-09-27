import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { HoroscopeService } from './horoscope.service';
import { CreateHoroscopeRequest } from '../dto/create-horoscope.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';
import { HoroscopeResponse } from '../dto/horoscope.response';

@Controller('api')
export class HoroscopeController {
  constructor(private readonly horoscopeService: HoroscopeService) {}

  @Post('horoscope')
  @UseGuards(JwtAuthGuard)
  async createHoroscope(
    @Body() request: CreateHoroscopeRequest,
  ): Promise<HoroscopeResponse> {
    return await this.horoscopeService.createHoroscope(request);
  }

  @Get('horoscope')
  @UseGuards(JwtAuthGuard)
  async getHoroscopeBy(
    @Query() request: GetByIdNameRequest,
  ): Promise<HoroscopeResponse[]> {
    return await this.horoscopeService.getHoroscopeBy(request);
  }
}
