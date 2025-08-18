var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Param, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
let HorarioController = class HorarioController {
    constructor(horarioModel) {
        this.horarioModel = horarioModel;
    }
    async getAllHorarios(periodo, ativo) {
        const query = {};
        if (periodo && ['AM', 'PM'].includes(periodo.toUpperCase())) {
            query.periodo = periodo.toUpperCase();
        }
        if (ativo !== undefined) {
            query.ativo = ativo === 'true';
        }
        return this.horarioModel
            .find(query)
            .sort({ horarioInicio: 1 })
            .lean()
            .exec();
    }
    async getHorariosByPeriodo(periodo) {
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
    async getHorariosAtivos() {
        return this.horarioModel
            .find({ ativo: true })
            .sort({ periodo: 1, horarioInicio: 1 })
            .lean()
            .exec();
    }
    async getHorarioById(id) {
        return this.horarioModel
            .findById(id)
            .lean()
            .exec();
    }
};
__decorate([
    Get(),
    __param(0, Query('periodo')),
    __param(1, Query('ativo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HorarioController.prototype, "getAllHorarios", null);
__decorate([
    Get('periodo/:periodo'),
    __param(0, Param('periodo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HorarioController.prototype, "getHorariosByPeriodo", null);
__decorate([
    Get('ativos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HorarioController.prototype, "getHorariosAtivos", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HorarioController.prototype, "getHorarioById", null);
HorarioController = __decorate([
    Controller('horarios'),
    __param(0, InjectModel('Horario')),
    __metadata("design:paramtypes", [Model])
], HorarioController);
export { HorarioController };
//# sourceMappingURL=horario.controller.js.map