import mongoose from 'mongoose';
import { MediaModel } from './media.resource.js';
const MusicaisSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Imagem' },
    emBreve: { type: Boolean, default: false },
    finalizado: { type: Boolean, default: false },
    linkDaCompra: { type: String },
    dataDivulgacao: { type: Date },
});
const MusicaisModel = mongoose.models.Musicais || mongoose.model('Musicais', MusicaisSchema);
const MusicaisResource = {
    resource: MusicaisModel,
    options: {
        actions: {
            show: {
                after: async (response, request, context) => {
                    const { record } = context;
                    if (record?.params?.media) {
                        const mediaDoc = await MediaModel.findById(record.params.media).lean().exec();
                        if (mediaDoc) {
                            record.params.mediaUrl = mediaDoc.url;
                        }
                    }
                    return response;
                },
            },
        },
        properties: {
            nome: { isTitle: true },
            descricao: { type: 'richtext' },
            media: {
                reference: 'Media',
                isArray: false,
                components: {
                    show: 'ShowProductImage',
                },
            },
            emBreve: {
                type: 'boolean',
            },
            finalizado: {
                type: 'boolean',
            },
            linkDaCompra: {
                type: 'string',
            },
            dataDivulgacao: {
                type: 'datetime',
            },
        },
        listProperties: ['nome', 'media', 'emBreve', 'finalizado', 'dataDivulgacao'],
        editProperties: ['nome', 'descricao', 'media', 'emBreve', 'finalizado', 'linkDaCompra', 'dataDivulgacao'],
        showProperties: ['nome', 'descricao', 'media', 'emBreve', 'finalizado', 'linkDaCompra', 'dataDivulgacao'],
    },
};
export { MusicaisResource, MusicaisModel, MusicaisSchema };
//# sourceMappingURL=musicais.js.map