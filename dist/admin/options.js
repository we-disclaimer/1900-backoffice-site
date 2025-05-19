import mongoose from 'mongoose';
import { locales as AdminJSLocales } from 'adminjs';
import { HomeResource } from './entities/home.entity.js';
import { UnidadeResource } from './resources/unidades.resource.js';
import componentLoader from './component-loader.js';
import ValePizzaResource from './resources/vale-pizza.resource.js';
import { MediaResource } from './resources/media.resource.js';
import { PostResource } from './resources/post.resource.js';
import { CategoriaResource } from './resources/subcategoria.resource.js';
import { CardapioResource } from './resources/cardapio.resource.js';
import { TeatroResource } from './resources/teatro.resource.js';
import { MusicaisResource } from './resources/musicais.js';
const mongooseDb = await mongoose.connect('mongodb+srv://admin:TXCCMCCQvgQhmKwZ@cluster0.j7wteli.mongodb.net/website?retryWrites=true&w=majority');
const options = {
    rootPath: '/admin',
    resources: [HomeResource, UnidadeResource, MediaResource, CardapioResource, PostResource, CategoriaResource, ValePizzaResource, TeatroResource, MusicaisResource],
    dashboard: {
        component: 'RedirectDashboard',
    },
    databases: [mongooseDb],
    componentLoader,
    locale: {
        language: 'pt-BR',
        availableLanguages: Object.keys(AdminJSLocales),
    },
};
export default options;
//# sourceMappingURL=options.js.map