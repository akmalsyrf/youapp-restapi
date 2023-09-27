import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { InterestService } from './interest.service';
import { CreateOnlyNameRequest } from '../dto/create-only-name.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';
import { OnlyNameResponse } from '../dto/only-name.response';

@Controller('api')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Post('interest')
  @UseGuards(JwtAuthGuard)
  async createInterest(
    @Body() request: CreateOnlyNameRequest,
  ): Promise<OnlyNameResponse> {
    return await this.interestService.createInterest(request);
  }

  @Get('interest')
  @UseGuards(JwtAuthGuard)
  async getInterestBy(
    @Query() request: GetByIdNameRequest,
  ): Promise<OnlyNameResponse[]> {
    return await this.interestService.getInterestBy(request);
  }
}
