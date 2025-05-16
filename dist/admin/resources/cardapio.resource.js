import mongoose from 'mongoose';
const CardapioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tituloSessao: { type: String },
    descricao: { type: String },
    mostrarNoJantar: { type: Boolean },
    mostrarNoDelivery: { type: Boolean },
    categorias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }],
});
const CardapioModel = mongoose.models.Cardapio || mongoose.model('Cardapio', CardapioSchema);
const CardapioResource = {
    resource: CardapioModel,
    options: {
        listProperties: ['nome', 'mostrarNoJantar', 'mostrarNoDelivery', 'categorias'],
        editProperties: [
            'nome',
            'tituloSessao',
            'descricao',
            'mostrarNoJantar',
            'mostrarNoDelivery',
            'categorias',
        ],
        showProperties: [
            'nome',
            'tituloSessao',
            'descricao',
            'mostrarNoJantar',
            'mostrarNoDelivery',
            'categorias',
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
export { CardapioModel };
export default CardapioResource;
//# sourceMappingURL=cardapio.resource.js.map