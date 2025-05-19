import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const MusicaisSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const MusicaisModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
}, {}> & {
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    emBreve: boolean;
    finalizado: boolean;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    linkDaCompra?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const MusicaisResource: ResourceWithOptions;
export { MusicaisResource, MusicaisModel, MusicaisSchema };
