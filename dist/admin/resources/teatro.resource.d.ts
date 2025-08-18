import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const TeatroSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const TeatroModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
}, {}> & {
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const TeatroResource: ResourceWithOptions;
export { TeatroResource, TeatroModel, TeatroSchema };
