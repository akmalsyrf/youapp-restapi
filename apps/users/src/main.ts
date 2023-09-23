import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const port = configService.get<number>('MS_USER_PORT');
  await app.listen(port, () => {
    Logger.log(`HTTP Server listening on port ${port}`);
  });
}
bootstrap();
