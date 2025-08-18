import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const CategoriaNoticiasSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    cor: string;
    descricao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    cor: string;
    descricao?: string;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    cor: string;
    descricao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const CategoriaNoticiasModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    cor: string;
    descricao?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    cor: string;
    descricao?: string;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    cor: string;
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
    cor: string;
    descricao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    cor: string;
    descricao?: string;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    cor: string;
    descricao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const CategoriaNoticiasResource: ResourceWithOptions;
export { CategoriaNoticiasModel, CategoriaNoticiasResource, CategoriaNoticiasSchema };
