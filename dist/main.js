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
    await app.listen(process.env.PORT ?? 3000);
    app.use('/public', express.static(join(__dirname, '..', 'public')));
    app.use(session({
        secret: 'sua-chave-secreta',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
        },
    }));
}
bootstrap();
//# sourceMappingURL=main.js.map