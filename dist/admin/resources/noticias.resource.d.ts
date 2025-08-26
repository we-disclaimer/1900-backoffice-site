import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const NoticiasSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}>, {}> & mongoose.FlatRecord<{
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
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
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}, {}> & {
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    dataPublicacao?: NativeDate;
    slugPermanente?: string;
    metaTitle?: string;
    metaDescription?: string;
}>, {}> & mongoose.FlatRecord<{
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
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
