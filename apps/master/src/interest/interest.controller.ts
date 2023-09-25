import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { InterestService } from './interest.service';
import { CreateOnlyNameRequest } from '../dto/create-only-name.request';

@Controller('api')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Post('zodiac')
  @UseGuards(JwtAuthGuard)
  createZodiac(@Body() request: CreateOnlyNameRequest) {
    return this.interestService.createZodiac(request);
  }
}
