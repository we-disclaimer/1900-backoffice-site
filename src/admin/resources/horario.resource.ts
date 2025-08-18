import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';

const HorarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  horarioInicio: { type: String, required: true }, // Ex: "09:00"
  horarioFim: { type: String, required: true }, // Ex: "17:00"
  periodo: { type: String, enum: ['AM', 'PM'], required: true },
  ativo: { type: Boolean, default: true },
  observacoes: { type: String },
}, {
  timestamps: true,
});

const HorarioModel = mongoose.models.Horario || mongoose.model('Horario', HorarioSchema);

const HorarioResource: ResourceWithOptions = {
  resource: HorarioModel,
  options: {
    properties: {
      nome: {
        isTitle: true,
        isRequired: true,
      },
      horarioInicio: {
        type: 'string',
        isRequired: true,
        description: 'Formato: HH:MM (ex: 09:00)',
      },
      horarioFim: {
        type: 'string',
        isRequired: true,
        description: 'Formato: HH:MM (ex: 17:00)',
      },
      periodo: {
        type: 'string',
        isRequired: true,
        components: {
          edit: 'PeriodoSelect', // Componente customizado
        },
        description: 'Selecione AM ou PM',
      },
      ativo: {
        type: 'boolean',
      },
      observacoes: {
        type: 'textarea',
      },
      createdAt: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      updatedAt: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
    },
    listProperties: ['nome', 'horarioInicio', 'horarioFim', 'periodo', 'ativo', 'createdAt'],
    editProperties: ['nome', 'horarioInicio', 'horarioFim', 'periodo', 'ativo', 'observacoes'],
    showProperties: ['nome', 'horarioInicio', 'horarioFim', 'periodo', 'ativo', 'observacoes', 'createdAt', 'updatedAt'],
    filterProperties: ['nome', 'periodo', 'ativo'],
  },
};

export { HorarioResource, HorarioModel, HorarioSchema };
