import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { ZodiacService } from './zodiac.service';
import { CreateOnlyNameRequest } from '../dto/create-only-name.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';
import { OnlyNameResponse } from '../dto/only-name.response';

@Controller('api')
export class ZodiacController {
  constructor(private readonly zodiacService: ZodiacService) {}

  @Post('zodiac')
  @UseGuards(JwtAuthGuard)
  async createZodiac(
    @Body() request: CreateOnlyNameRequest,
  ): Promise<OnlyNameResponse> {
    return await this.zodiacService.createZodiac(request);
  }

  @Get('zodiac')
  @UseGuards(JwtAuthGuard)
  async getZodiacBy(
    @Query() request: GetByIdNameRequest,
  ): Promise<OnlyNameResponse[]> {
    return await this.zodiacService.getZodiacBy(request);
  }
}
