import 'dotenv/config';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import session from 'express-session';

import { AppModule } from './app.module.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Libera CORS para qualquer origem
  app.enableCors({
    origin: '*',
  });

  app.use('/public', express.static(join(__dirname, '..', 'public')));

  app.use(
    session({
      secret: 'sua-chave-secreta',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 dia
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
