/* eslint-disable max-len */
import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { ConfigModule } from '@nestjs/config';
import * as AdminJSMongoose from '@adminjs/mongoose';
import AdminJS from 'adminjs';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import { ProductsModule } from './products.module.js';
import { UnidadesModule } from './unidades.module.js';
import { TeatroModule } from './teatro.module.js';
import { MusicaisModule } from './musicais.module.js';
import { CardapioModule } from './cardapio.module.js';

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ProductsModule,
    UnidadesModule,
    TeatroModule,
    MusicaisModule,
    CardapioModule,
    MongooseModule.forRoot('mongodb+srv://admin:TXCCMCCQvgQhmKwZ@cluster0.j7wteli.mongodb.net/website?retryWrites=true&w=majority'),
    AdminModule.createAdminAsync({
      useFactory: async () => ({
        adminJsOptions: {
          ...options,
          branding: {
            companyName: '1900 - Site Principal - 2025',
            logo: 'https://backoffice-app-assets.s3.us-east-1.amazonaws.com/1900-backoffice/public/media/logo.png', // caminho relativo público
            softwareBrothers: false,
            theme: {
              colors: {
                primary100: '#0c4a2b',
                primary80: '#0c4a2b',
                primary60: '#0c4a2b',
                primary40: '#0c4a2b',
                primary20: '#0c4a2b',

                // Botões e destaques
                accent: '#0c4a2b', // verde para botões secundários
                hoverBg: '#0c4a2b', // hover do botão

                // Texto de botões, links etc.
                text: '#1F2937',
              },
            },
          },
        },
        auth: {
          provider,
          cookiePassword: process.env.COOKIE_SECRET,
          cookieName: 'adminjs',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: process.env.COOKIE_SECRET,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
