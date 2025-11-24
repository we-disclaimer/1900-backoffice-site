import mongoose from 'mongoose';
import uploadFeature from '@adminjs/upload';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFile } from 'fs/promises';
import componentLoader from '../component-loader.js';
const getS3Client = () => {
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID?.trim();
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY?.trim();
    const region = process.env.AWS_REGION?.trim() || 'us-east-1';
    console.log('🔑 AWS Credentials Check:', {
        hasAccessKey: !!accessKeyId,
        accessKeyLength: accessKeyId?.length || 0,
        hasSecretKey: !!secretAccessKey,
        secretKeyLength: secretAccessKey?.length || 0,
        region,
        accessKeyStart: accessKeyId?.substring(0, 4),
        secretKeyStart: secretAccessKey?.substring(0, 4),
    });
    if (!accessKeyId || !secretAccessKey) {
        throw new Error('AWS credentials not found in environment variables. Please check your .env file.');
    }
    return new S3Client({
        region,
        credentials: {
            accessKeyId,
            secretAccessKey,
        },
    });
};
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
                        const bucket = process.env.AWS_BUCKET || 'backoffice-app-assets';
                        console.log('📦 Upload Config:', {
                            bucket,
                            key: s3Key,
                            fileName: file.name,
                            fileSize: file.size,
                        });
                        const fileBuffer = file.path ? await readFile(file.path) : Buffer.from(await file.arrayBuffer());
                        const uploadCommand = new PutObjectCommand({
                            Bucket: bucket,
                            Key: s3Key,
                            Body: fileBuffer,
                            ContentType: file.type || 'application/octet-stream',
                        });
                        const s3Client = getS3Client();
                        console.log('🚀 Sending upload command to S3...');
                        await s3Client.send(uploadCommand);
                        console.log('✅ Upload successful!');
                        const region = process.env.AWS_REGION || 'us-east-1';
                        const url = `https://${bucket}.s3.${region}.amazonaws.com/${s3Key}`;
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
                after: async (response, request, context) => {
                    if (response.record && response.record.params.url) {
                        const url = response.record.params.url;
                        if (!url.startsWith('http')) {
                            const bucket = process.env.AWS_BUCKET || 'backoffice-app-assets';
                            const region = process.env.AWS_REGION || 'us-east-1';
                            const fullUrl = `https://${bucket}.s3.${region}.amazonaws.com/${url}`;
                            console.log('🔄 Corrigindo URL:', url, '→', fullUrl);
                            await MediaModel.findByIdAndUpdate(response.record.id, { url: fullUrl });
                            response.record.params.url = fullUrl;
                        }
                    }
                    return response;
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
                after: async (response, request, context) => {
                    if (response.record && response.record.params.url) {
                        const url = response.record.params.url;
                        if (!url.startsWith('http')) {
                            const bucket = process.env.AWS_BUCKET || 'backoffice-app-assets';
                            const region = process.env.AWS_REGION || 'us-east-1';
                            const fullUrl = `https://${bucket}.s3.${region}.amazonaws.com/${url}`;
                            console.log('🔄 Corrigindo URL:', url, '→', fullUrl);
                            await MediaModel.findByIdAndUpdate(response.record.id, { url: fullUrl });
                            response.record.params.url = fullUrl;
                        }
                    }
                    return response;
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
                    bucket: process.env.AWS_BUCKET || 'backoffice-app-assets',
                    region: process.env.AWS_REGION || 'us-east-1',
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
                },
            },
            properties: {
                key: 'url',
                file: 'file',
            },
            uploadPath: (record, filename) => {
                console.log('🔍 uploadPath chamado - filename:', filename);
                const bucket = process.env.AWS_BUCKET || 'backoffice-app-assets';
                const region = process.env.AWS_REGION || 'us-east-1';
                const basePath = '1900-backoffice/public/media';
                const finalPath = `${basePath}//${filename}`;
                const fullUrl = `https://${bucket}.s3.${region}.amazonaws.com/${finalPath}`;
                console.log('🎯 Caminho final:', finalPath);
                console.log('📍 URL completa:', fullUrl);
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