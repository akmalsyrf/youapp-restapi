import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { ZodiacService } from './zodiac.service';
import { CreateOnlyNameRequest } from '../dto/create-only-name.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';

@Controller('api')
export class ZodiacController {
  constructor(private readonly zodiacService: ZodiacService) {}

  @Post('zodiac')
  @UseGuards(JwtAuthGuard)
  createZodiac(@Body() request: CreateOnlyNameRequest) {
    return this.zodiacService.createZodiac(request);
  }

  @Get('zodiac')
  @UseGuards(JwtAuthGuard)
  getZodiacBy(@Query() request: GetByIdNameRequest) {
    return this.zodiacService.getZodiacBy(request);
  }
}
