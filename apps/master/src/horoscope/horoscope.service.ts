import { Injectable } from '@nestjs/common';
import { HoroscopeRepository } from './horoscope.repository';
import { CreateHoroscopeRequest } from '../dto/create-horoscope.request';
import { GetByIdNameRequest } from '../dto/get-by-id-name.request';

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

  async createHoroscope(request: CreateHoroscopeRequest) {
    return await this.horoscopeRepository.create(request);
  }

  async getHoroscopeBy(request?: GetByIdNameRequest) {
    return await this.horoscopeRepository.find(request);
  }
}
