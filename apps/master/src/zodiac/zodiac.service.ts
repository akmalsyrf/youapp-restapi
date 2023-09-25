import { Injectable } from '@nestjs/common';
import { ZodiacRepository } from './zodiac.repository';
import { CreateZodiacRequest } from '../dto/create-zodiac.request';

@Injectable()
export class ZodiacService {
  constructor(private readonly zodiacRepository: ZodiacRepository) {}

  /***
    bulk create script for migration purpose
  ***/
  bulkCreateZodiac(request: CreateZodiacRequest[]) {
    return this.zodiacRepository.bulkCreate(request);
  }
  /*****
   ******/

  createZodiac(request: CreateZodiacRequest) {
    return this.zodiacRepository.create(request);
  }
}
