import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

import { MediaModel } from './media.resource.js';

const MusicaisSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Imagem' },
  emBreve: { type: Boolean, default: false },
  linkDaCompra: { type: String },
});

const MusicaisModel = mongoose.models.Musicais || mongoose.model('Musicais', MusicaisSchema);

const MusicaisResource: ResourceWithOptions = {
  resource: MusicaisModel,
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
        label: 'Em breve',
      },
      linkDaCompra: {
        type: 'string',
        label: 'Link da compra',
      },
    },
    listProperties: ['nome', 'media', 'emBreve'],
    editProperties: ['nome', 'descricao', 'media', 'emBreve', 'linkDaCompra'],
    showProperties: ['nome', 'descricao', 'media', 'emBreve', 'linkDaCompra'],
  },
};

export { MusicaisResource, MusicaisModel, MusicaisSchema };
