import mongoose from 'mongoose';
const CategoriaNoticiasSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    descricao: { type: String },
    cor: { type: String, default: '#0c4a2b' },
}, {
    timestamps: true,
});
const CategoriaNoticiasModel = mongoose.models.CategoriaNoticias || mongoose.model('CategoriaNoticias', CategoriaNoticiasSchema);
const CategoriaNoticiasResource = {
    resource: CategoriaNoticiasModel,
    options: {
        properties: {
            nome: {
                isTitle: true,
                isRequired: true,
            },
            descricao: {
                type: 'textarea',
            },
            cor: {
                type: 'string',
                description: 'Cor em hexadecimal (ex: #0c4a2b)',
            },
        },
        listProperties: ['nome', 'descricao', 'cor'],
        editProperties: ['nome', 'descricao', 'cor'],
        showProperties: ['nome', 'descricao', 'cor', 'createdAt', 'updatedAt'],
        filterProperties: ['nome'],
    },
};
export { CategoriaNoticiasModel, CategoriaNoticiasResource, CategoriaNoticiasSchema };
//# sourceMappingURL=categoria-noticias.resource.js.map