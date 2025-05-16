// server.js
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import session from 'express-session';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';

import options from './src/admin/options.js'; // Caminho certo

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const start = async () => {
  const app = express();

  // Sessão (necessária para login funcionar)
  app.use(
    session({
      secret: 'sua-chave-super-secreta',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 dia
      },
    }),
  );

  // AdminJS
  const admin = new AdminJS(options);

  // Usuário e senha (pode usar variáveis de ambiente em produção)
  const ADMIN = {
    email: 'admin',
    password: '123',
  };

  // Autenticação
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
    authenticate: async (email, password) => {
      if (email === ADMIN.email && password === ADMIN.password) {
        return ADMIN;
      }
      return null;
    },
    cookiePassword: 'outra-chave-secreta-para-cookie',
  });

  app.use(admin.options.rootPath, adminRouter);

  // Arquivos estáticos
  app.use('/public', express.static(join(__dirname, 'public')));

  // Iniciar servidor
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`✅ AdminJS rodando em http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();
