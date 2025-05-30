import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

import { MediaModel } from './media.resource.js';
import { CategoriaModel } from './subcategoria.resource.js';

const PostSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', label: 'Imagem' },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
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
      sincronizarPrecos: {
        component: 'SyncPricesAction', // Aqui
        actionType: 'bulk',
        icon: 'Sync',
        isVisible: true,
        guard: 'Tem certeza que deseja sincronizar os preços dos produtos selecionados?',

        handler: async (request, response, context) => {
          // Os ids vêm em request.query.recordIds como string separada por vírgula
          const { recordIds } = request.query;

          if (!recordIds) {
            throw new Error('Nenhum produto selecionado.');
          }

          // Transforma em array de strings
          const ids = recordIds.split(',');

          // Busca os registros via model, já que context.records pode estar vazio
          const records = await context.resource.findMany(ids);

          // Atualiza os preços (exemplo fixo)
          await Promise.all(records.map(async (record) => {
            await context.resource.update(record.id(), { precoUnico: 9.99 });
          }));

          // Após atualização, busca os registros atualizados
          const updatedRecords = await context.resource.findMany(ids);

          return {
            records: updatedRecords.map((r) => r.toJSON(context.currentAdmin)),
            notice: {
              message: `Preços sincronizados com sucesso para ${ids.length} produto(s).`,
              type: 'success',
            },
          };
        },
      },
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

    listProperties: ['titulo', 'categoria', 'precoUnico', 'dataDeCriacao', 'codigoIntegracao', 'tags'],
    editProperties: [
      'titulo',
      'descricao',
      'media',
      'categoria',
      'precos',
      'jantar',
      'delivery',
      'tags',
      'codigoIntegracao',
    ],
    showProperties: [
      'titulo',
      'descricao',
      'media',
      'categoria',
      'precos',
      'jantar',
      'delivery',
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
      titulo: { isTitle: true },
      descricao: { type: 'richtext' },
      media: {
        reference: 'Media',
        isArray: false,
        components: {
          show: 'ShowProductImage',
        },
      },
      categoria: {
        reference: 'Categoria',
        isVisible: {
          list: true, filter: true, show: true, edit: true,
        },
      },

      precoUnico: { isVisible: false },
      precoMedio: { isVisible: false },
      precoGrande: { isVisible: false },
      precoIndividual: { isVisible: false },

      precos: {
        isVisible: {
          list: false, filter: false, show: true, edit: true,
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
          list: false, filter: false, show: true, edit: true,
        },
        components: {
          edit: 'GroupedDisponibilities',
          show: 'GroupedDisponibilities',
        },
        position: 20,
      },

      tags: { type: 'string' },
      codigoIntegracao: { type: 'string' },
    },
  },
};

export { PostResource, PostModel, PostSchema };
