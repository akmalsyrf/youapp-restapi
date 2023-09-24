import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { AuthModule } from './auth.module';
import { RmqOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const rmqService = app.get<RmqService>(RmqService);

  const config = new DocumentBuilder()
    .setTitle('Auth example')
    .setDescription('The Auth API description')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.connectMicroservice<RmqOptions>(rmqService.getOptions('auth', true));
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.get('MS_AUTH_PORT'));
}
bootstrap();
