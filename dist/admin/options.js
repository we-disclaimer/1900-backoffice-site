import mongoose from 'mongoose';
import { locales as AdminJSLocales } from 'adminjs';
import { HomeResource } from './entities/home.entity.js';
import { UnidadeResource } from './entities/unidades.entity.js';
import componentLoader from './component-loader.js';
import { MediaResource } from './resources/media.resource.js';
import PostResource from './resources/post.resource.js';
import { CategoriaResource } from './resources/categoria.resource.js';
import CardapioResource from './resources/cardapio.resource.js';
const mongooseDb = await mongoose.connect('mongodb+srv://admin:TXCCMCCQvgQhmKwZ@cluster0.j7wteli.mongodb.net/website?retryWrites=true&w=majority');
const options = {
    rootPath: '/admin',
    resources: [HomeResource, UnidadeResource, MediaResource, CardapioResource, PostResource, CategoriaResource],
    databases: [mongooseDb],
    componentLoader,
    locale: {
        language: 'pt-BR',
        availableLanguages: Object.keys(AdminJSLocales),
    },
};
export default options;
//# sourceMappingURL=options.js.map