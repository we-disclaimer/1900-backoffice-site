import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const UnidadeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const UnidadeModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
}, {}> & {
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    criadoEm: NativeDate;
    resumo?: string;
    mediaCapa?: mongoose.Types.ObjectId;
    mediaPrincipal?: mongoose.Types.ObjectId;
    mediaSecundaria?: mongoose.Types.ObjectId;
    linkVideo?: string;
    descricao?: string;
    codigoGoogleMaps?: string;
    linkGoogleMaps?: string;
    codigoReservas?: string;
    tags?: string;
    outrasInformacoes?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const UnidadeResource: ResourceWithOptions;
export { UnidadeResource, UnidadeModel, UnidadeSchema };
