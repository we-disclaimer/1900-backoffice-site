import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const PostSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
}>, {}> & mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const PostModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
}, {}> & {
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
}>, {}> & mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    titulo: string;
    tags?: string;
    media?: mongoose.Types.ObjectId;
    descricao?: string;
    precoMedio?: number;
    precoGrande?: number;
    categoria?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    codigoIntegracao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const PostResource: ResourceWithOptions;
export { PostResource, PostModel, PostSchema };
