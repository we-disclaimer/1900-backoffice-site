import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const CardapioModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    tituloSessao?: string;
    descricao?: string;
    mostrarNoJantar?: boolean;
    mostrarNoDelivery?: boolean;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    tituloSessao?: string;
    descricao?: string;
    mostrarNoJantar?: boolean;
    mostrarNoDelivery?: boolean;
}, {}> & {
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    tituloSessao?: string;
    descricao?: string;
    mostrarNoJantar?: boolean;
    mostrarNoDelivery?: boolean;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    tituloSessao?: string;
    descricao?: string;
    mostrarNoJantar?: boolean;
    mostrarNoDelivery?: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    tituloSessao?: string;
    descricao?: string;
    mostrarNoJantar?: boolean;
    mostrarNoDelivery?: boolean;
}>, {}> & mongoose.FlatRecord<{
    nome: string;
    categorias: mongoose.Types.ObjectId[];
    tituloSessao?: string;
    descricao?: string;
    mostrarNoJantar?: boolean;
    mostrarNoDelivery?: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const CardapioResource: ResourceWithOptions;
export { CardapioModel };
export default CardapioResource;
