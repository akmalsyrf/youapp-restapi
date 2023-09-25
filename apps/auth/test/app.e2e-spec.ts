import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuthModule } from './../src/auth.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/register (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/register')
      .send({
        username: 'cobacoba',
        email: 'cobacoba@yopmail.com',
        password: 'coba',
      });
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });

  it('/api/login (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/login')
      .send({
        email: 'cobacoba@yopmail.com',
        password: 'coba',
      });

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });
});
