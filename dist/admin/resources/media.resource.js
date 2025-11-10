import mongoose from 'mongoose';
import uploadFeature from '@adminjs/upload';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFile } from 'fs/promises';
import componentLoader from '../component-loader.js';
const s3Client = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: 'AKIA46XIEXYZSXUO54SR',
        secretAccessKey: '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',
    },
});
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
                component: 'MediaLibraryList',
                before: async (request, context) => {
                    if (!request.query.perPage) {
                        request.query.perPage = 500;
                    }
                    return request;
                },
            },
            bulkUpload: {
                actionType: 'resource',
                handler: async (request, response, context) => {
                    if (!request.payload || !request.payload.file) {
                        return {
                            notice: {
                                message: 'Nenhum arquivo foi enviado',
                                type: 'error',
                            },
                        };
                    }
                    try {
                        const file = request.payload.file;
                        const alt = request.payload.alt || file.name || 'Sem título';
                        const s3Key = `1900-backoffice/public/media//${file.name}`;
                        const fileBuffer = file.path ? await readFile(file.path) : Buffer.from(await file.arrayBuffer());
                        const uploadCommand = new PutObjectCommand({
                            Bucket: 'backoffice-app-assets',
                            Key: s3Key,
                            Body: fileBuffer,
                            ContentType: file.type || 'application/octet-stream',
                        });
                        await s3Client.send(uploadCommand);
                        const url = `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${s3Key}`;
                        const newMedia = new MediaModel({
                            url,
                            alt,
                        });
                        await newMedia.save();
                        return {
                            notice: {
                                message: 'Arquivo enviado com sucesso!',
                                type: 'success',
                            },
                            record: context.resource.build(newMedia.toObject()),
                        };
                    }
                    catch (error) {
                        return {
                            notice: {
                                message: `Erro ao enviar arquivo: ${error.message}`,
                                type: 'error',
                            },
                        };
                    }
                },
            },
            new: {
                before: async (request, context) => {
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
            componentLoader,
            provider: {
                aws: {
                    bucket: 'backoffice-app-assets',
                    region: 'us-east-1',
                    accessKeyId: 'AKIA46XIEXYZSXUO54SR',
                    secretAccessKey: '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',
                },
            },
            properties: {
                key: 'url',
                file: 'file',
            },
            uploadPath: (record, filename) => {
                console.log('🔍 uploadPath chamado - filename:', filename);
                const basePath = '1900-backoffice/public/media';
                const finalPath = `${basePath}//${filename}`;
                console.log('🎯 Caminho final:', finalPath);
                return finalPath;
            },
            validation: {
                maxSize: 2 * 1024 * 1024,
            },
        }),
    ],
};
export { MediaResource, MediaModel, MediaSchema };
//# sourceMappingURL=media.resource.js.map