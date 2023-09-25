import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { ZodiacService } from './zodiac.service';
import { CreateZodiacRequest } from '../dto/create-zodiac.request';

@Controller('api')
export class ZodiacController {
  constructor(private readonly zodiacService: ZodiacService) {}

  @Post('zodiac')
  @UseGuards(JwtAuthGuard)
  createZodiac(@Body() request: CreateZodiacRequest) {
    return this.zodiacService.createZodiac(request);
  }
}
