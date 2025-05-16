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
      edit: {
        before: async (request, context) => {
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
      componentLoader, // **adicionado aqui**
    }),
  ],
};

export { MediaResource, MediaModel };
