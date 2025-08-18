import mongoose from 'mongoose';
import { MediaModel } from './media.resource.js';
import { CategoriaNoticiasModel } from './categoria-noticias.resource.js';
const NoticiasSchema = new mongoose.Schema({
    fotoDestaque: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Foto de Destaque' },
    dataPublicacao: { type: Date, default: Date.now },
    titulo: { type: String, required: true },
    slugPermanente: { type: String, required: false },
    resumo: { type: String, required: true },
    conteudo: { type: String, required: true },
    categorias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CategoriaNoticias' }],
    curtidas: { type: Number, default: 0 },
});
const NoticiasModel = mongoose.models.Noticias || mongoose.model('Noticias', NoticiasSchema);
const NoticiasResource = {
    resource: NoticiasModel,
    options: {
        actions: {
            show: {
                after: async (response, request, context) => {
                    const { record } = context;
                    if (record?.params?.fotoDestaque) {
                        const mediaDoc = await MediaModel.findById(record.params.fotoDestaque).lean().exec();
                        if (mediaDoc) {
                            record.params.fotoDestaqueUrl = mediaDoc.url;
                        }
                    }
                    if (record?.params?.conteudo) {
                        const content = record.params.conteudo;
                        const imageCount = (content.match(/<img/g) || []).length;
                        if (imageCount > 0) {
                            record.params.infoConteudo = `Conteúdo contém ${imageCount} imagem(ns)`;
                        }
                    }
                    return response;
                },
            },
            edit: {
                before: async (request, context) => {
                    if (request.payload?.titulo && (!request.payload?.slugPermanente || request.payload.slugPermanente.trim() === '')) {
                        const slug = request.payload.titulo
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-')
                            .replace(/-+/g, '-')
                            .trim('-');
                        request.payload.slugPermanente = slug;
                    }
                    if (request.payload?.categorias) {
                        const categorias = Array.isArray(request.payload.categorias)
                            ? request.payload.categorias
                            : [request.payload.categorias];
                        const categoriasProcessadas = [];
                        for (const categoria of categorias) {
                            if (typeof categoria === 'string' && !mongoose.Types.ObjectId.isValid(categoria)) {
                                const novaCategoria = await CategoriaNoticiasModel.findOneAndUpdate({ nome: categoria }, { nome: categoria }, { upsert: true, new: true });
                                categoriasProcessadas.push(novaCategoria._id);
                            }
                            else {
                                categoriasProcessadas.push(categoria);
                            }
                        }
                        request.payload.categorias = categoriasProcessadas;
                    }
                    return request;
                },
                after: async (response, request, context) => {
                    if (response.record?.params?.conteudo) {
                        const content = response.record.params.conteudo;
                        const imageCount = (content.match(/<img/g) || []).length;
                        if (imageCount > 0) {
                            response.notice = {
                                message: `Conteúdo salvo com ${imageCount} imagem(ns). As imagens podem não aparecer no editor, mas estão salvas.`,
                                type: 'success'
                            };
                        }
                    }
                    return response;
                },
            },
            new: {
                before: async (request, context) => {
                    if (request.payload?.titulo && !request.payload?.slugPermanente) {
                        const slug = request.payload.titulo
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-')
                            .replace(/-+/g, '-')
                            .trim('-');
                        request.payload.slugPermanente = slug;
                    }
                    if (request.payload?.categorias) {
                        const categorias = Array.isArray(request.payload.categorias)
                            ? request.payload.categorias
                            : [request.payload.categorias];
                        const categoriasProcessadas = [];
                        for (const categoria of categorias) {
                            if (typeof categoria === 'string' && !mongoose.Types.ObjectId.isValid(categoria)) {
                                const novaCategoria = await CategoriaNoticiasModel.findOneAndUpdate({ nome: categoria }, { nome: categoria }, { upsert: true, new: true });
                                categoriasProcessadas.push(novaCategoria._id);
                            }
                            else {
                                categoriasProcessadas.push(categoria);
                            }
                        }
                        request.payload.categorias = categoriasProcessadas;
                    }
                    return request;
                },
            },
        },
        properties: {
            titulo: {
                isTitle: true,
                isRequired: true,
            },
            slugPermanente: {
                type: 'string',
                description: 'URL amigável para a notícia (ex: minha-noticia-importante)',
                position: 2,
            },
            resumo: {
                type: 'textarea',
                isRequired: true,
            },
            conteudo: {
                type: 'richtext',
                isRequired: true,
                description: 'Editor de texto rico. ATENÇÃO: Imagens inseridas podem não aparecer na edição, mas são salvas corretamente.',
            },
            fotoDestaque: {
                reference: 'Media',
                isArray: false,
                components: {
                    show: 'ShowProductImage',
                },
            },
            dataPublicacao: {
                isVisible: {
                    list: true,
                    filter: true,
                    show: true,
                    edit: false,
                },
                components: {
                    list: 'FormattedDate',
                    show: 'FormattedDate',
                },
            },
            categorias: {
                reference: 'CategoriaNoticias',
                isArray: true,
                components: {
                    edit: 'CategoriaSelectReal',
                },
                description: 'Selecione categorias existentes ou crie novas em tempo real.',
            },
            curtidas: {
                isVisible: false,
            },
            infoConteudo: {
                isVisible: {
                    list: false,
                    filter: false,
                    show: true,
                    edit: false,
                },
                type: 'string',
            },
        },
        listProperties: ['titulo', 'slugPermanente', 'dataPublicacao', 'categorias', 'fotoDestaque'],
        editProperties: ['titulo', 'slugPermanente', 'resumo', 'conteudo', 'fotoDestaque', 'categorias'],
        showProperties: ['titulo', 'slugPermanente', 'resumo', 'conteudo', 'infoConteudo', 'fotoDestaque', 'categorias', 'dataPublicacao'],
        sort: {
            sortBy: 'dataPublicacao',
            direction: 'desc',
        },
    },
};
export { NoticiasResource, NoticiasModel, NoticiasSchema };
//# sourceMappingURL=noticias.resource.js.map