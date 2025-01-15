import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import multiPart from '@fastify/multipart';
import CONFIG from './common/modules/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(multiPart, {
    throwFileSizeLimit: true,
    limits: {
      files: 1,
      fileSize: 50000000,
    },
  });

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(CONFIG.PORT, '0.0.0.0');
}

bootstrap();
