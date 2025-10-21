import mongoose from 'mongoose';
import AdminJS, { ResourceWithOptions } from 'adminjs';
import uploadFeature from '@adminjs/upload';

import componentLoader from '../component-loader.js';

// 1. Modelo Mongoose
const MediaSchema = new mongoose.Schema({
  url: { type: String },
  alt: { type: String },
  dataDeCriacao: { type: Date, default: Date.now },
});

const MediaModel = mongoose.models.Media || mongoose.model('Media', MediaSchema);
const MediaResource: ResourceWithOptions = {
  resource: MediaModel,
  options: {
    actions: {
      list: {
        before: async (request, context) => {
          request.query.perPage = 10; // Limitar a 10 itens por página
          return request;
        },
      },
      new: {
        before: async (request, context) => {
          const MAX_SIZE = 2 * 1024 * 1024; // 2MB em bytes
          
          if (request.payload && request.payload.file) {
            const file = request.payload.file;
            
            // Verificar o tamanho do arquivo
            if (file.size && file.size > MAX_SIZE) {
              throw new Error(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
            }
          }
          
          return request;
        },
      },
      edit: {
        before: async (request, context) => {
          const MAX_SIZE = 2 * 1024 * 1024; // 2MB em bytes
          
          // Validar tamanho do arquivo se estiver fazendo upload de um novo arquivo
          if (request.payload && request.payload.file) {
            const file = request.payload.file;
            
            if (file.size && file.size > MAX_SIZE) {
              throw new Error(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
            }
          }
          
          const { record } = context;
          console.log('recordMEDIAXXXXXXXXXXX', record.params.media);
          if (record && record.params.media) {
            // buscar o documento media pelo id
            const mediaDoc = await (MediaModel as any).findById(record.params.media).lean().exec();

            console.log('mediaDoc', mediaDoc);

            if (mediaDoc) {
              // sobrescreve o valor para popular o campo com o objeto (ou só url)
              record.params.media = mediaDoc.url || null;
            }
          }

          return request;
        },
      },
    },
    listProperties: ['thumb', 'alt', 'dataDeCriacao'],
    editProperties: ['file', 'alt'],
    titleProperty: 'alt', // isso define o valor mostrado nos dropdowns
    showProperties: ['url', 'alt', 'dataDeCriacao'],
    properties: {
      file: {
        custom: {
          maxSize: 2 * 1024 * 1024, // 2MB em bytes
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
          accessKeyId: 'AKIA46XIEXYZSXUO54SR',
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
        maxSize: 2 * 1024 * 1024, // 2MB em bytes
      },
      componentLoader, // **adicionado aqui**
    }),
  ],
};

export { MediaResource, MediaModel, MediaSchema };
