import { Injectable } from '@nestjs/common';
import { InterestRepository } from './interest.repository';
import { CreateOnlyNameRequest } from '../dto/create-only-name.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';

@Injectable()
export class InterestService {
  constructor(private readonly interestRepository: InterestRepository) {}

  /***
    bulk create script for migration purpose
  ***/
  bulkCreateInterest(request: CreateOnlyNameRequest[]) {
    return this.interestRepository.bulkCreate(request);
  }
  /*****
   ******/

  createInterest(request: CreateOnlyNameRequest) {
    return this.interestRepository.create(request);
  }

  async getInterestBy(request?: GetByIdNameRequest) {
    return await this.interestRepository.find(request);
  }
}
