// const PostResource: ResourceWithOptions = {
//     resource: PostModel,
//     options: {
//       listProperties: ['titulo', 'dataDeCriacao'],
//       editProperties: ['titulo', 'content', 'media'],
//       showProperties: ['titulo', 'content', 'media', 'dataDeCriacao'],
//       properties: {
//         media: {
//           reference: 'Media', // importante: referencia o resource Media
//           isArray: true, // pode ser vários
//         },
//       },
//     },
//   };
import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

import { MediaModel } from './media.resource.js';

const PostSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Imagem' },
  precoUnico: { type: Number },
  precoMedio: { type: Number },
  precoGrande: { type: Number },
  precoIndividual: { type: Number },
  jantar: { type: Boolean },
  delivery: { type: Boolean },
  tags: { type: String },
  codigoIntegracao: { type: String },
  dataDeCriacao: { type: Date, default: Date.now },
});

const PostModel = mongoose.models.Post || mongoose.model('Produtos', PostSchema);

const PostResource: ResourceWithOptions = {
  resource: PostModel,
  options: {
    actions: {
      show: {
        after: async (response, request, context) => {
          const { record } = context;
          if (record?.params?.media) {
            const mediaDoc = await (MediaModel as any).findById(record.params.media).lean().exec();
            if (mediaDoc) {
              record.params.mediaUrl = mediaDoc.url;
            }
          }
          return response;
        },
      },
    },
    listProperties: ['titulo', 'precoUnico', 'dataDeCriacao', 'codigoIntegracao', 'tags'],
    editProperties: [
      'titulo',
      'descricao',
      'media',
      'precos', // campo virtual preços
      'disponibilidades', // campo virtual jantar + delivery
      'tags',
      'codigoIntegracao',
    ],
    showProperties: [
      'titulo',
      'descricao',
      'media',
      'precos',
      'disponibilidades',
      'tags',
      'codigoIntegracao',
      'dataDeCriacao',
    ],
    properties: {
      dataDeCriacao: {
        components: {
          list: 'FormattedDate',
          show: 'FormattedDate',
        },
      },
      titulo: {
        isTitle: true,
      },
      descricao: {
        type: 'richtext',
      },
      media: {
        reference: 'Media',
        isArray: false,
        components: {
          show: 'ShowProductImage',
        },
      },
      precoUnico: { isVisible: false },
      precoMedio: { isVisible: false },
      precoGrande: { isVisible: false },
      precoIndividual: { isVisible: false },

      precos: {
        isVisible: {
          list: false,
          filter: false,
          show: true,
          edit: true,
        },
        components: {
          edit: 'GroupedPrices',
          show: 'GroupedPrices',
        },
        position: 10,
      },

      jantar: { isVisible: false },
      delivery: { isVisible: false },

      disponibilidades: {
        isVisible: {
          list: false,
          filter: false,
          show: true,
          edit: true,
        },
        components: {
          edit: 'GroupedDisponibilities',
          show: 'GroupedDisponibilities',
        },
        position: 20,
      },

      tags: {
        type: 'string',
      },
      codigoIntegracao: {
        type: 'string',
      },
    },
  },
};

export default PostResource;
