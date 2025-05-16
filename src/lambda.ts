import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import express from 'express';
import serverless from '@vendia/serverless-express';

import { AppModule } from './app.module.js';

let cachedHandler: ReturnType<typeof serverless.default>;

export async function bootstrapServer() {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);

  const app = await NestFactory.create(AppModule, adapter);
  await app.init();

  return serverless.default({ app: expressApp });
}

export const handler = async (event: any, context: any) => {
  if (!cachedHandler) {
    const server = await bootstrapServer();
    cachedHandler = server;
  }

  return cachedHandler(event, context);
};
