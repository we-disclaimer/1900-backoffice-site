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
import { Controller, Get, Param, NotFoundException, BadRequestException, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
let CategoriaController = class CategoriaController {
    constructor(categoriaModel) {
        this.categoriaModel = categoriaModel;
    }
    async getAllCategoria() {
        return this.categoriaModel.find().lean().exec();
    }
    async getCategoriasByIds(ids) {
        const idArray = ids
            .split(',')
            .map((id) => id.trim())
            .filter(Boolean);
        if (idArray.length === 0) {
            throw new BadRequestException('Nenhum ID válido fornecido.');
        }
        const categorias = await this.categoriaModel
            .find({ _id: { $in: idArray } })
            .lean()
            .exec();
        if (!categorias || categorias.length === 0) {
            throw new NotFoundException('Nenhuma categoria encontrada para os IDs fornecidos.');
        }
        const categoriasOrdenadas = idArray.map((id) => categorias.find((cat) => cat._id.toString() === id)).filter(Boolean);
        return categoriasOrdenadas;
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "getAllCategoria", null);
__decorate([
    Get('by-ids/:ids'),
    __param(0, Param('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "getCategoriasByIds", null);
CategoriaController = __decorate([
    Controller('categoria'),
    __param(0, InjectModel('Categoria')),
    __metadata("design:paramtypes", [Model])
], CategoriaController);
export { CategoriaController };
//# sourceMappingURL=subcategoria.controller.js.map