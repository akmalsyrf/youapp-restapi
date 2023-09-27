import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { InterestService } from './interest.service';
import { CreateOnlyNameRequest } from '../dto/create-only-name.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';

@Controller('api')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Post('interest')
  @UseGuards(JwtAuthGuard)
  createInterest(@Body() request: CreateOnlyNameRequest) {
    return this.interestService.createInterest(request);
  }

  @Get('interest')
  @UseGuards(JwtAuthGuard)
  getInterestBy(@Query() request: GetByIdNameRequest) {
    return this.interestService.getInterestBy(request);
  }
}
