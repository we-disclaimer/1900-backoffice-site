import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

import { MediaModel } from './media.resource.js';

const UnidadeSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  resumo: { type: String },
  mediaCapa: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Imagem de Capa' },
  mediaPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Imagem Principal' },
  mediaSecundaria: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Imagem Secundária' },
  linkVideo: { type: String },
  descricao: { type: String },
  codigoGoogleMaps: { type: String },
  linkGoogleMaps: { type: String },
  codigoReservas: { type: String },
  tags: { type: String },
  outrasInformacoes: { type: String },
  criadoEm: { type: Date, default: Date.now },
});

const UnidadeModel = mongoose.models.Unidade || mongoose.model('Unidade', UnidadeSchema);

const UnidadeResource: ResourceWithOptions = {
  resource: UnidadeModel,
  options: {
    actions: {
      show: {
        after: async (response, request, context) => {
          const { record } = context;

          const mediaFields = [
            { field: 'mediaCapa', urlField: 'mediaCapaUrl' },
            { field: 'mediaPrincipal', urlField: 'mediaPrincipalUrl' },
            { field: 'mediaSecundaria', urlField: 'mediaSecundariaUrl' },
          ];

          for (const { field, urlField } of mediaFields) {
            if (record?.params?.[field]) {
              const mediaDoc = await (MediaModel as any).findById(record.params[field]).lean().exec();
              if (mediaDoc?.url) {
                record.params[urlField] = mediaDoc.url;
              }
            }
          }

          return response;
        },
      },
    },

    listProperties: ['nome', 'resumo', 'mediaCapa', 'linkVideo', 'tags'],
    editProperties: [
      'nome',
      'resumo',
      'mediaCapa',
      'mediaPrincipal',
      'mediaSecundaria',
      'linkVideo',
      'descricao',
      'codigoGoogleMaps',
      'codigoReservas',
      'linkGoogleMaps',
      'tags',
      'outrasInformacoes',
    ],
    showProperties: [
      'nome',
      'resumo',
      'mediaCapa',
      'mediaPrincipal',
      'mediaSecundaria',
      'linkVideo',
      'descricao',
      'codigoGoogleMaps',
      'codigoReservas',
      'linkGoogleMaps',
      'tags',
      'outrasInformacoes',
      'criadoEm',
    ],
    properties: {
      nome: { isTitle: true },
      descricao: { type: 'richtext' },
      outrasInformacoes: { type: 'richtext' },
      criadoEm: {
        components: {
          list: 'FormattedDate',
          show: 'FormattedDate',
        },
      },
      mediaCapa: {
        reference: 'Media',
        isArray: false,
        components: {
          show: 'ShowProductImage',
        },
      },
      mediaPrincipal: {
        reference: 'Media',
        isArray: false,
        components: {
          show: 'ShowProductImage',
        },
      },
      mediaSecundaria: {
        reference: 'Media',
        isArray: false,
        components: {
          show: 'ShowProductImage',
        },
      },
    },
  },
};

export { UnidadeResource, UnidadeModel, UnidadeSchema };
