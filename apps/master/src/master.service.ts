import { Injectable } from '@nestjs/common';
import { CreateHoroscopeRequest } from './dto/create-horoscope.request';
import { HoroscopeRepository } from './repository/horoscope.repository';
import { CreateZodiacRequest } from './dto/create-zodiac.request';
import { ZodiacRepository } from './repository/zodiac.repository';

@Injectable()
export class MasterService {
  constructor(
    private readonly horoscopeRepository: HoroscopeRepository,
    private readonly zodiacRepository: ZodiacRepository,
  ) {}

  createHoroscope(request: CreateHoroscopeRequest) {
    return this.horoscopeRepository.create(request);
  }
  createZodiac(request: CreateZodiacRequest) {
    return this.zodiacRepository.create(request);
  }
}
