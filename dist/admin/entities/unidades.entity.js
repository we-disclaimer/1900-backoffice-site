import { UnidadeModel } from '../models/unidade.entity.js';
export const UnidadeResource = {
    resource: UnidadeModel,
    options: {
        actions: {
            list: { isAccessible: true },
            new: { isAccessible: true },
            edit: { isAccessible: true },
            delete: { isAccessible: true },
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
                components: {},
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
//# sourceMappingURL=unidades.entity.js.map