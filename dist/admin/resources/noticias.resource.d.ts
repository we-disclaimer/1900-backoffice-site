import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const NoticiasSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
}>, {}> & mongoose.FlatRecord<{
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const NoticiasModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
}, {}> & {
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
}>, {}> & mongoose.FlatRecord<{
    dataPublicacao: NativeDate;
    titulo: string;
    resumo: string;
    conteudo: string;
    categorias: mongoose.Types.ObjectId[];
    curtidas: number;
    fotoDestaque?: mongoose.Types.ObjectId;
    slugPermanente?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const NoticiasResource: ResourceWithOptions;
export { NoticiasResource, NoticiasModel, NoticiasSchema };
