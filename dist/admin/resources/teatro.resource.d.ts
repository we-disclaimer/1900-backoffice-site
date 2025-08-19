import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const TeatroSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const TeatroModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
}, {}> & {
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const TeatroResource: ResourceWithOptions;
export { TeatroResource, TeatroModel, TeatroSchema };
