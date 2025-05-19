import mongoose from 'mongoose';
import { MediaModel } from './media.resource.js';
const TeatroSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Imagem' },
});
const TeatroModel = mongoose.models.Teatro || mongoose.model('Teatro', TeatroSchema);
const TeatroResource = {
    resource: TeatroModel,
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
        },
        listProperties: ['nome', 'media'],
        editProperties: ['nome', 'descricao', 'media'],
        showProperties: ['nome', 'descricao', 'media'],
    },
};
export { TeatroResource, TeatroModel, TeatroSchema };
//# sourceMappingURL=teatro.resource.js.map