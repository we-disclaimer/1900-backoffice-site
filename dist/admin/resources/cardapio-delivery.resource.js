import { Schema, model } from 'mongoose';
const CardapioDeliverySchema = new Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    imagem: { type: String },
    precoUnitario: { type: Number },
    precoPequeno: { type: Number },
    precoMedio: { type: Number },
    precoGrande: { type: Number },
    vegana: { type: Boolean, default: false },
}, { timestamps: true });
export const CardapioDeliveryModel = model('CardapioDelivery', CardapioDeliverySchema);
export const CardapioDeliveryResource = {
    resource: CardapioDeliveryModel,
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
export default CardapioDeliveryResource;
//# sourceMappingURL=cardapio-delivery.resource.js.map