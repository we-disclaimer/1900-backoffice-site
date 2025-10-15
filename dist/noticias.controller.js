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
let NoticiasController = class NoticiasController {
    constructor(noticiasModel) {
        this.noticiasModel = noticiasModel;
    }
    async getAllNoticias(categoria) {
        const query = categoria ? { categorias: categoria } : {};
        return this.noticiasModel
            .find(query)
            .select('-conteudo')
            .populate('fotoDestaque')
            .populate('categorias')
            .sort({ dataPublicacao: -1 })
            .lean()
            .exec();
    }
    async getNoticiasRecentes() {
        return this.noticiasModel
            .find()
            .select('-conteudo')
            .populate('fotoDestaque')
            .populate('categorias')
            .sort({ dataPublicacao: -1 })
            .limit(2)
            .lean()
            .exec();
    }
    async getCategorias() {
        return this.noticiasModel
            .aggregate([
            { $unwind: '$categorias' },
            { $lookup: { from: 'categorianoticias', localField: 'categorias', foreignField: '_id', as: 'categoria' } },
            { $unwind: '$categoria' },
            { $group: { _id: '$categoria._id', nome: { $first: '$categoria.nome' }, count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ])
            .exec();
    }
    async getNoticiaById(id) {
        return this.noticiasModel
            .findById(id)
            .populate('fotoDestaque')
            .populate('categorias')
            .lean()
            .exec();
    }
    async getNoticiaBySlug(slug) {
        return this.noticiasModel
            .findOne({ slugPermanente: slug })
            .populate('fotoDestaque')
            .populate('categorias')
            .lean()
            .exec();
    }
};
__decorate([
    Get(),
    __param(0, Query('categoria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "getAllNoticias", null);
__decorate([
    Get('recentes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "getNoticiasRecentes", null);
__decorate([
    Get('categorias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "getCategorias", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "getNoticiaById", null);
__decorate([
    Get('slug/:slug'),
    __param(0, Param('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "getNoticiaBySlug", null);
NoticiasController = __decorate([
    Controller('noticias'),
    __param(0, InjectModel('Noticias')),
    __metadata("design:paramtypes", [Model])
], NoticiasController);
export { NoticiasController };
//# sourceMappingURL=noticias.controller.js.map