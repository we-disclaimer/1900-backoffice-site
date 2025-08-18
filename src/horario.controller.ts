/* eslint-disable no-empty-function */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { HorarioModel } from './admin/resources/horario.resource.js';

@Controller('horarios')
export class HorarioController {
  constructor(
    @InjectModel('Horario') private readonly horarioModel: Model<typeof HorarioModel>,
  ) {}

  @Get()
  async getAllHorarios(@Query('periodo') periodo?: string, @Query('ativo') ativo?: string) {
    const query: any = {};
    
    if (periodo && ['AM', 'PM'].includes(periodo.toUpperCase())) {
      query.periodo = periodo.toUpperCase();
    }
    
    if (ativo !== undefined) {
      query.ativo = ativo === 'true';
    }

    return this.horarioModel
      .find(query)
      .sort({ horarioInicio: 1 }) // Ordenar por horário de início
      .lean()
      .exec();
  }

  @Get('periodo/:periodo')
  async getHorariosByPeriodo(@Param('periodo') periodo: string) {
    const periodoUpper = periodo.toUpperCase();
    
    if (!['AM', 'PM'].includes(periodoUpper)) {
      return { error: 'Período deve ser AM ou PM' };
    }

    return this.horarioModel
      .find({ periodo: periodoUpper, ativo: true })
      .sort({ horarioInicio: 1 })
      .lean()
      .exec();
  }

  @Get('ativos')
  async getHorariosAtivos() {
    return this.horarioModel
      .find({ ativo: true })
      .sort({ periodo: 1, horarioInicio: 1 }) // Ordenar por período e depois horário
      .lean()
      .exec();
  }

  @Get(':id')
  async getHorarioById(@Param('id') id: string) {
    return this.horarioModel
      .findById(id)
      .lean()
      .exec();
  }
}
