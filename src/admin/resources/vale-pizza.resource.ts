import { Schema, model } from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

// 1. Schema do Vale Pizza
const ValePizzaSchema = new Schema(
  {
    dataVenda: { type: Date, required: true },
    codigoVoucher: { type: String, required: true },
    quantidadeMaximaPorCpf: { type: Number, required: true },
    dataInicio: { type: Date, required: true },
    dataEncerramento: { type: Date, required: true },
    conteudo: { type: String }, // HTML / texto formatado
    preco: { type: Number, required: true },
  },
  { timestamps: true },
);

// 2. Model
export const ValePizzaModel = model('ValePizza', ValePizzaSchema);

// 3. Resource para AdminJS
export const ValePizzaResource: ResourceWithOptions = {
  resource: ValePizzaModel,
  options: {
    navigation: {
      name: 'Configurar Vale Pizza',
      icon: 'Ticket',
    },
    properties: {
      _id: { isVisible: false },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },

      dataVenda: { type: 'date' },
      codigoVoucher: { type: 'string' },
      quantidadeMaximaPorCpf: { type: 'string' },
      dataInicio: { type: 'date' },
      dataEncerramento: { type: 'date' },
      conteudo: { type: 'richtext' },
      preco: { type: 'number' },
    },
    actions: {
      list: { isAccessible: true },
      new: { isAccessible: true },
      edit: { isAccessible: true },
      delete: { isAccessible: true },
    },
  },
};

export default ValePizzaResource;
