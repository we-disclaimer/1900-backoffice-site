import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

import { CategoriaModel } from './subcategoria.resource.js';

const CardapioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tituloSessao: { type: String },
  descricao: { type: String },
  mostrarNoJantar: { type: Boolean },
  mostrarNoDelivery: { type: Boolean },
  categorias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }],
  ordemNoMenu: { type: Number },
});

const CardapioModel = mongoose.models.Cardapio || mongoose.model('Cardapio', CardapioSchema);

const CardapioResource: ResourceWithOptions = {
  resource: CardapioModel,
  options: {
    listProperties: ['nome', 'ordemNoMenu', 'mostrarNoJantar', 'mostrarNoDelivery', 'categorias'],
    editProperties: [
      'nome',
      'tituloSessao',
      'descricao',
      'mostrarNoJantar',
      'mostrarNoDelivery',
      'categorias',
      'ordemNoMenu',
    ],
    showProperties: [
      'nome',
      'tituloSessao',
      'descricao',
      'mostrarNoJantar',
      'mostrarNoDelivery',
      'categorias',
      'ordemNoMenu',
    ],
    properties: {
      nome: {
        isTitle: true,
      },
      tituloSessao: {
        type: 'string',
      },
      descricao: {
        type: 'richtext',
      },
      mostrarNoJantar: {
        type: 'boolean',
      },
      mostrarNoDelivery: {
        type: 'boolean',
      },
      categorias: {
        reference: 'Categoria',
        isArray: true,
      },
    },
  },
};

export { CardapioModel, CardapioResource, CardapioSchema };
