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
            new: {
                before: async (request, context) => {
                    const MAX_SIZE = 2 * 1024 * 1024;
                    if (request.payload && request.payload.file) {
                        const file = request.payload.file;
                        if (file.size && file.size > MAX_SIZE) {
                            throw new Error(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
                        }
                    }
                    return request;
                },
            },
            edit: {
                before: async (request, context) => {
                    const MAX_SIZE = 2 * 1024 * 1024;
                    if (request.payload && request.payload.file) {
                        const file = request.payload.file;
                        if (file.size && file.size > MAX_SIZE) {
                            throw new Error(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
                        }
                    }
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
            file: {
                custom: {
                    maxSize: 2 * 1024 * 1024,
                },
            },
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
            validation: {
                maxSize: 2 * 1024 * 1024,
            },
            componentLoader,
        }),
    ],
};
export { MediaResource, MediaModel, MediaSchema };
//# sourceMappingURL=media.resource.js.map