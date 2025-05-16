import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const CategoriaModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    mostrarNoDelivery: boolean;
    mostrarNoJantar: boolean;
    ordemNoMenu: number;
    descricao?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    mostrarNoDelivery: boolean;
    mostrarNoJantar: boolean;
    ordemNoMenu: number;
    descricao?: string;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    mostrarNoDelivery: boolean;
    mostrarNoJantar: boolean;
    ordemNoMenu: number;
    descricao?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    mostrarNoDelivery: boolean;
    mostrarNoJantar: boolean;
    ordemNoMenu: number;
    descricao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    mostrarNoDelivery: boolean;
    mostrarNoJantar: boolean;
    ordemNoMenu: number;
    descricao?: string;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    mostrarNoDelivery: boolean;
    mostrarNoJantar: boolean;
    ordemNoMenu: number;
    descricao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const CategoriaResource: ResourceWithOptions;
export { CategoriaModel, CategoriaResource };
