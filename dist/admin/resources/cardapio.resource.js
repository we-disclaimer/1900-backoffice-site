import mongoose from 'mongoose';
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
const CardapioResource = {
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
//# sourceMappingURL=cardapio.resource.js.map