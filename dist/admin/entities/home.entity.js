import { Schema, model } from 'mongoose';
import { MediaModel } from '../resources/media.resource.js';
const HomeSchema = new Schema({
    title: { type: String, required: true },
    subtitle: String,
    bannerImage: String,
    content: String,
    metaTagTitle: String,
    metaTagDescription: String,
    media: { type: Schema.Types.ObjectId, ref: 'Media' },
    buttonText: String,
    buttonLink: String,
    banner: { type: Schema.Types.ObjectId, ref: 'Media' },
    bannerDescription: String,
}, { timestamps: true });
const HomeModel = model('Home', HomeSchema);
const HomeResource = {
    resource: HomeModel,
    options: {
        listProperties: ['title', 'metaTagTitle', 'metaTagDescription'],
        editProperties: [
            'title',
            'subtitle',
            'metaTagTitle',
            'metaTagDescription',
            'buttonText',
            'buttonLink',
            'banner',
            'bannerDescription',
        ],
        showProperties: [
            'title',
            'subtitle',
            'metaTagTitle',
            'metaTagDescription',
            'buttonText',
            'buttonLink',
            'banner',
            'bannerDescription',
        ],
        properties: {
            _id: { isVisible: false },
            createdAt: { isVisible: false },
            updatedAt: { isVisible: false },
            media: {
                reference: 'Media',
                isArray: false,
                isVisible: false,
            },
            content: { isVisible: false },
            banner: {
                reference: 'Media',
                isArray: false,
                components: {
                    show: 'ShowProductImage',
                },
            },
        },
        actions: {
            list: { isAccessible: true },
            new: { isAccessible: true },
            delete: { isAccessible: true },
            show: {
                after: async (response, request, context) => {
                    const { record } = context;
                    if (record?.params?.banner) {
                        const mediaDoc = await MediaModel.findById(record.params.banner).lean().exec();
                        if (mediaDoc) {
                            record.params.bannerUrl = mediaDoc.url;
                            record.params.bannerAlt = mediaDoc.alt;
                        }
                    }
                    return response;
                },
            },
            editHome: {
                actionType: 'resource',
                name: 'Editar Página Home',
                icon: 'Edit',
                isVisible: true,
                handler: async (request, response, context) => {
                    const records = await context.resource.findMany([]);
                    const record = records[0];
                    if (!record) {
                        throw new Error('Nenhum registro da Home encontrado.');
                    }
                    return {
                        redirectUrl: context.h.recordActionUrl({
                            resourceId: context.resource.id(),
                            actionName: 'edit',
                            recordId: record.id(),
                        }),
                    };
                },
            },
        },
    },
};
export { HomeResource, HomeSchema, HomeModel };
//# sourceMappingURL=home.entity.js.map