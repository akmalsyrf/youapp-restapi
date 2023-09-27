import { Injectable } from '@nestjs/common';
import { ZodiacRepository } from './zodiac.repository';
import { CreateOnlyNameRequest } from '../dto/create-only-name.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';

@Injectable()
export class ZodiacService {
  constructor(private readonly zodiacRepository: ZodiacRepository) {}

  /***
    bulk create script for migration purpose
  ***/
  bulkCreateZodiac(request: CreateOnlyNameRequest[]) {
    return this.zodiacRepository.bulkCreate(request);
  }
  /*****
   ******/

  async createZodiac(request: CreateOnlyNameRequest) {
    return await this.zodiacRepository.create(request);
  }

  async getZodiacBy(request?: GetByIdNameRequest) {
    return await this.zodiacRepository.find(request);
  }
}
