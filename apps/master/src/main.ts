import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { RmqOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MasterModule } from './master.module';

async function bootstrap() {
  const app = await NestFactory.create(MasterModule);
  const rmqService = app.get<RmqService>(RmqService);

  app.connectMicroservice<RmqOptions>(rmqService.getOptions('MASTER', true));
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.get('MS_MASTER_PORT'));
}
bootstrap();
