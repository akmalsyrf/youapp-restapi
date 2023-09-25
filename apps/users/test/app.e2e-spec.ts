import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from './../src/users.module';
import { CreateUserRequest } from '../src/dto/create-user.request';
import { UpdateUserRequest } from '../src/dto/update-user.request';

describe('MasterController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/getProfile (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/api/getProfile');

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });

  it('/api/createProfile (POST)', async () => {
    const payload: CreateUserRequest = {
      accountId: 'Ox',
      about: '',
      interest: [''],
    };
    const response = await request(app.getHttpServer())
      .post('/api/createProfile')
      .send(payload);
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body.accountId).toEqual(payload.accountId);
    expect(response.body.about).toEqual(payload.about);
    expect(response.body.interest).toEqual(payload.interest);
  });

  it('/api/updateProfile (POST)', async () => {
    const payload: UpdateUserRequest = {
      _id: '',
      about: '',
      interest: ['Tech'],
    };
    const response = await request(app.getHttpServer())
      .post('/api/updateProfile')
      .send(payload);
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body._id).toEqual(payload._id);
    expect(response.body.about).toEqual(payload.about);
    expect(response.body.interest).toEqual(payload.interest);
  });
});
