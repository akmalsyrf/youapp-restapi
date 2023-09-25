import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MasterModule } from './../src/master.module';
import { CreateHoroscopeRequest } from '../src/dto/create-horoscope.request';
import { CreateOnlyNameRequest } from '../src/dto/create-only-name.request';

describe('MasterController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MasterModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/horoscope (POST)', async () => {
    const payload: CreateHoroscopeRequest = {
      name: '',
      startDate: '',
      endDate: '',
    };
    const response = await request(app.getHttpServer())
      .post('/api/horoscope')
      .send(payload);

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body.name).toEqual(payload.name);
    expect(response.body.startDate).toEqual(payload.startDate);
    expect(response.body.endDate).toEqual(payload.endDate);
  });

  it('/api/zodiac (POST)', async () => {
    const payload: CreateOnlyNameRequest = {
      name: 'Ox',
    };
    const response = await request(app.getHttpServer())
      .post('/api/zodiac')
      .send(payload);
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body.name).toEqual(payload.name);
  });
});
