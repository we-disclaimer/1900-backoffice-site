import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const PostSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
}>, {}> & mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const PostModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
}, {}> & {
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
}>, {}> & mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    titulo: string;
    categoria?: mongoose.Types.ObjectId;
    descricao?: string;
    media?: mongoose.Types.ObjectId;
    precoUnico?: number;
    precoMedio?: number;
    precoGrande?: number;
    precoIndividual?: number;
    jantar?: boolean;
    delivery?: boolean;
    tags?: string;
    codigoIntegracao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const PostResource: ResourceWithOptions;
export { PostResource, PostModel, PostSchema };
