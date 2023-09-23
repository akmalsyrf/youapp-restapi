import { NestFactory } from '@nestjs/core';
import { MasterModule } from './master.module';

async function bootstrap() {
  const app = await NestFactory.create(MasterModule);
  await app.listen(3000);
}
bootstrap();
