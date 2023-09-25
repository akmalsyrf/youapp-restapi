import { Injectable } from '@nestjs/common';
import { HoroscopeRepository } from './horoscope.repository';
import { CreateHoroscopeRequest } from '../dto/create-horoscope.request';

@Injectable()
export class HoroscopeService {
  constructor(private readonly horoscopeRepository: HoroscopeRepository) {}

  /***
    bulk create script for migration purpose
  ***/

  bulkCreateHoroscope(request: CreateHoroscopeRequest[]) {
    return this.horoscopeRepository.bulkCreate(request);
  }
  /*****
   ******/

  createHoroscope(request: CreateHoroscopeRequest) {
    return this.horoscopeRepository.create(request);
  }
}
