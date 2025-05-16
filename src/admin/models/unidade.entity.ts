import { Schema, model } from 'mongoose';

// Definição do esquema da Unidade
const UnidadeSchema = new Schema(
  {
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    descricao: { type: String, required: true },
    fotoPrincipal: { type: String, required: true }, // Campo de URL para a foto
    linkReserva: { type: String, required: true },
    video: { type: String, required: false },
    outrasInformacoes: {
      wifi: { type: Boolean, default: false },
      valet: { type: Boolean, default: false },
      acessibilidade: { type: Boolean, default: false },
      capacidade: { type: Number, default: 180 },
      permitidoPet: { type: Boolean, default: false },
    },
  },
  { timestamps: true },
);

export const UnidadeModel = model('Unidade', UnidadeSchema);
