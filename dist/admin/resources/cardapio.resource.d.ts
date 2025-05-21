import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const CardapioSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const CardapioModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
}, {}> & {
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    descricao?: string;
    mostrarNoDelivery?: boolean;
    mostrarNoJantar?: boolean;
    ordemNoMenu?: number;
    tituloSessao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const CardapioResource: ResourceWithOptions;
export { CardapioModel, CardapioResource, CardapioSchema };
