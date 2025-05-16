import mongoose from 'mongoose';
import { locales as AdminJSLocales } from 'adminjs';
import { HomeResource } from './entities/home.entity.js';
import { UnidadeResource } from './entities/unidades.entity.js';
import componentLoader from './component-loader.js';
import CardapioJantarResource from './resources/cardapio-jantar.resource.js';
import CardapioDeliveryResource from './resources/cardapio-delivery.resource.js';
import { MediaResource } from './resources/media.resource.js';
import PostResource from './resources/post.resource.js';
const mongooseDb = await mongoose.connect('mongodb+srv://admin:TXCCMCCQvgQhmKwZ@cluster0.j7wteli.mongodb.net/website?retryWrites=true&w=majority');
const options = {
    rootPath: '/admin',
    resources: [HomeResource, UnidadeResource, CardapioJantarResource, CardapioDeliveryResource, MediaResource, PostResource],
    databases: [mongooseDb],
    componentLoader,
    locale: {
        language: 'pt-BR',
        availableLanguages: Object.keys(AdminJSLocales),
    },
};
export default options;
//# sourceMappingURL=options.js.map