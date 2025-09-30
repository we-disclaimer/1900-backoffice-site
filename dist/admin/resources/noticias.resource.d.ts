import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const NoticiasSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}>, {}> & mongoose.FlatRecord<{
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const NoticiasModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}, {}> & {
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}>, {}> & mongoose.FlatRecord<{
    resumo: string;
    titulo: string;
    categorias: mongoose.Types.ObjectId[];
    conteudo: string;
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    videoDestaque?: string;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const NoticiasResource: ResourceWithOptions;
export { NoticiasResource, NoticiasModel, NoticiasSchema };
