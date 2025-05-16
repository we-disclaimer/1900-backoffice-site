import mongoose from 'mongoose';
import AdminJS, { ResourceWithOptions } from 'adminjs';

const CategoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  mostrarNoDelivery: { type: Boolean, default: false },
  mostrarNoJantar: { type: Boolean, default: false },
  ordemNoMenu: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const CategoriaModel = mongoose.models.Categoria || mongoose.model('Categoria', CategoriaSchema);

const CategoriaResource: ResourceWithOptions = {
  resource: CategoriaModel,
  options: {
    properties: {
      descricao: {
        type: 'richtext',
      },
      mostrarNoDelivery: {
        type: 'boolean',
      },
      mostrarNoJantar: {
        type: 'boolean',
      },
      ordemNoMenu: {
        type: 'number',
      },
    },
    listProperties: ['nome', 'mostrarNoDelivery', 'mostrarNoJantar', 'ordemNoMenu'],
    editProperties: ['nome', 'descricao', 'mostrarNoDelivery', 'mostrarNoJantar', 'ordemNoMenu'],
    showProperties: ['nome', 'descricao', 'mostrarNoDelivery', 'mostrarNoJantar', 'ordemNoMenu', 'createdAt'],
    filterProperties: ['nome', 'mostrarNoDelivery', 'mostrarNoJantar'],
  },
};

export { CategoriaModel, CategoriaResource };
