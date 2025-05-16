import { Schema, model } from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

// Definição do esquema da Home
const HomeSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: String,
    bannerImage: String,
    content: String,
  },
  { timestamps: true },
);

export const HomeModel = model('Home', HomeSchema);

export const HomeResource: ResourceWithOptions = {
  resource: HomeModel,
  options: {
    actions: {
      list: { isAccessible: true }, // Desabilitar listagem
      new: { isAccessible: true }, // Desabilitar criação
      delete: { isAccessible: true }, // Desabilitar exclusão

      // Ação personalizada
      editHome: {
        actionType: 'resource',
        name: 'Editar Página Home', // Nome da ação
        icon: 'Edit', // Ícone da ação
        isVisible: true, // Tornar a ação visível no menu
        handler: async (request, response, context) => {
          const records = await context.resource.findMany([]);
          const record = records[0]; // Considera o primeiro registro

          if (!record) {
            throw new Error('Nenhum registro da Home encontrado.');
          }

          // Redireciona para o formulário de edição do primeiro registro
          return {
            redirectUrl: context.h.recordActionUrl({
              resourceId: context.resource.id(),
              actionName: 'edit',
              recordId: record.id(),
            }),
          };
        },
      },
    },
    properties: {
      _id: { isVisible: false },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
    },
  },
};

export default HomeResource;
