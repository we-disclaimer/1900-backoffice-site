import { Schema, model } from 'mongoose';
const ValePizzaSchema = new Schema({
    dataVenda: { type: Date, required: true },
    codigoVoucher: { type: String, required: true },
    quantidadeMaximaPorCpf: { type: Number, required: true },
    dataInicio: { type: Date, required: true },
    dataEncerramento: { type: Date, required: true },
    conteudo: { type: String },
    preco: { type: Number, required: true },
}, { timestamps: true });
export const ValePizzaModel = model('ValePizza', ValePizzaSchema);
export const ValePizzaResource = {
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
//# sourceMappingURL=vale-pizza.resource.js.map