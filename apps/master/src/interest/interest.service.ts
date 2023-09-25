import { Injectable } from '@nestjs/common';
import { InterestRepository } from './interest.repository';
import { CreateOnlyNameRequest } from '../dto/create-only-name.request';

@Injectable()
export class InterestService {
  constructor(private readonly interestRepository: InterestRepository) {}

  /***
    bulk create script for migration purpose
  ***/
  bulkCreateZodiac(request: CreateOnlyNameRequest[]) {
    return this.interestRepository.bulkCreate(request);
  }
  /*****
   ******/

  createZodiac(request: CreateOnlyNameRequest) {
    return this.interestRepository.create(request);
  }
}
