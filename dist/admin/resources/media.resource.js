import mongoose from 'mongoose';
import uploadFeature from '@adminjs/upload';
import componentLoader from '../component-loader.js';
const MediaSchema = new mongoose.Schema({
    url: { type: String },
    alt: { type: String },
    dataDeCriacao: { type: Date, default: Date.now },
});
const MediaModel = mongoose.models.Media || mongoose.model('Media', MediaSchema);
const MediaResource = {
    resource: MediaModel,
    options: {
        actions: {
            list: {
                before: async (request, context) => {
                    request.query.perPage = 10;
                    return request;
                },
            },
            edit: {
                before: async (request, context) => {
                    const { record } = context;
                    console.log('recordMEDIAXXXXXXXXXXX', record.params.media);
                    if (record && record.params.media) {
                        const mediaDoc = await MediaModel.findById(record.params.media).lean().exec();
                        console.log('mediaDoc', mediaDoc);
                        if (mediaDoc) {
                            record.params.media = mediaDoc.url || null;
                        }
                    }
                    return request;
                },
            },
        },
        listProperties: ['thumb', 'alt', 'dataDeCriacao'],
        editProperties: ['file', 'alt'],
        titleProperty: 'alt',
        showProperties: ['url', 'alt', 'dataDeCriacao'],
        properties: {
            dataDeCriacao: {
                components: {
                    list: 'FormattedDate',
                    show: 'FormattedDate',
                },
            },
            thumb: {
                isVisible: {
                    list: true, filter: false, show: false, edit: false,
                },
                components: {
                    list: 'Thumb',
                },
            },
        },
    },
    features: [
        uploadFeature({
            provider: {
                aws: {
                    bucket: 'backoffice-app-assets',
                    region: 'us-east-1',
                    accessKeyId: 'AKIATOEBVSRWKESTP2NC',
                    secretAccessKey: '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',
                },
            },
            properties: {
                key: 'url',
                file: 'file',
            },
            uploadPath: (record, filename) => {
                const basePath = process.env.AWS_S3_UPLOAD_PATH || '';
                return `${basePath}/${filename}`;
            },
            componentLoader,
        }),
    ],
};
export { MediaResource, MediaModel };
//# sourceMappingURL=media.resource.js.map