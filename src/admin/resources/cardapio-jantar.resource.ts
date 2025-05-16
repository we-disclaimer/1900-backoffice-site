import { Schema, model } from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

// 1. Definindo o schema do Cardápio Jantar
const CardapioJantarSchema = new Schema(
  {
    nome: { type: String, required: true },
    descricao: { type: String },
    imagem: { type: String }, // URL da imagem
    precoUnitario: { type: Number },
    precoPequeno: { type: Number },
    precoMedio: { type: Number },
    precoGrande: { type: Number },
    vegana: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// 2. Criando o model
export const CardapioJantarModel = model('CardapioJantar', CardapioJantarSchema);

// 3. Definindo o resource do AdminJS
export const CardapioJantarResource: ResourceWithOptions = {
  resource: CardapioJantarModel,
  options: {
    properties: {
      _id: { isVisible: false },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },

      nome: { isTitle: true },
      descricao: { type: 'richtext' },
      imagem: {
        type: 'string',
        isVisible: true,
      },
      precoUnitario: { type: 'number' },
      precoPequeno: { type: 'number' },
      precoMedio: { type: 'number' },
      precoGrande: { type: 'number' },
      vegana: { type: 'boolean' },
    },
    actions: {
      list: { isAccessible: true },
      new: { isAccessible: true },
      edit: { isAccessible: true },
      delete: { isAccessible: true },
    },
  },
};

export default CardapioJantarResource;
