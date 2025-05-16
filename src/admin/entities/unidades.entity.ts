import { ResourceWithOptions } from 'adminjs';

import { UnidadeModel } from '../models/unidade.entity.js';// Importando o modelo Unidade

export const UnidadeResource: ResourceWithOptions = {
  resource: UnidadeModel,
  options: {
    actions: {
      // Definindo as ações para esse recurso
      list: { isAccessible: true }, // Habilita a listagem
      new: { isAccessible: true }, // Habilita a criação
      edit: { isAccessible: true }, // Habilita a edição
      delete: { isAccessible: true }, // Habilita a exclusão

      // Definindo as propriedades do modelo
    },
    properties: {
      _id: { isVisible: false },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
      nome: { isVisible: true },
      endereco: { isVisible: true },
      descricao: { isVisible: true },
      fotoPrincipal: {
        isVisible: true,
        type: 'string',
        isDisabled: false,
        isRequired: true,
        components: {
          // Pode-se adicionar um campo para upload de imagens se necessário
        },
      },
      linkReserva: { isVisible: true },
      video: { isVisible: true },
      wifi: { isVisible: true, type: 'boolean', isDisabled: false },
      valet: { isVisible: true, type: 'boolean', isDisabled: true },
      acessibilidade: { isVisible: true, type: 'boolean', isDisabled: true },
      capacidade: { isVisible: true, type: 'number', isDisabled: true },
      permitidoPet: { isVisible: true, type: 'boolean', isDisabled: true },
    },
  },
};

export default UnidadeResource;
