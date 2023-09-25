import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { RmqOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MasterModule } from './master.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MasterModule);
  const rmqService = app.get<RmqService>(RmqService);

  app.connectMicroservice<RmqOptions>(rmqService.getOptions('master', true));
  app.useGlobalPipes(new ValidationPipe());

  // swagger docs
  const config = new DocumentBuilder()
    .setTitle('Master example')
    .setDescription('The Master API description')
    .setVersion('1.0')
    .addTag('master')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.get('MS_MASTER_PORT'));
}
bootstrap();
