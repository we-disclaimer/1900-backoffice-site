/* eslint-disable max-len */
import AdminJS, { AdminJSOptions } from 'adminjs';
import mongoose from 'mongoose';
import { locales as AdminJSLocales } from 'adminjs';

import { HomeResource } from './entities/home.entity.js';
import { UnidadeResource } from './resources/unidades.resource.js';
import componentLoader from './component-loader.js';
import CardapioJantarResource from './resources/cardapio-jantar.resource.js';
import CardapioDeliveryResource from './resources/cardapio-delivery.resource.js';

import { MediaResource } from './resources/media.resource.js';
import { PostResource } from './resources/post.resource.js';
import { CategoriaResource } from './resources/subcategoria.resource.js';
import { CardapioResource } from './resources/cardapio.resource.js';
import { TeatroResource } from './resources/teatro.resource.js';
import { MusicaisResource } from './resources/musicais.js';
import { NoticiasResource } from './resources/noticias.resource.js';
import { CategoriaNoticiasResource } from './resources/categoria-noticias.resource.js';
import { HorarioResource } from './resources/horario.resource.js';

const mongooseDb = await mongoose.connect('mongodb+srv://admin:TXCCMCCQvgQhmKwZ@cluster0.j7wteli.mongodb.net/website?retryWrites=true&w=majority');

const options: AdminJSOptions = {

  rootPath: '/admin',
  resources: [HomeResource, UnidadeResource, MediaResource, CardapioResource, PostResource, CategoriaResource, TeatroResource, MusicaisResource, NoticiasResource, CategoriaNoticiasResource, HorarioResource],

  dashboard: {
    component: 'RedirectDashboard',
  },
  databases: [mongooseDb],
  componentLoader,
  locale: {
    language: 'pt-BR', // default language of application (also fallback)
    availableLanguages: Object.keys(AdminJSLocales),

  },
};

export default options;
