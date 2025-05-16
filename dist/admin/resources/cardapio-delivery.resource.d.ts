import { Schema } from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
export declare const CardapioDeliveryModel: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    vegana: boolean;
    descricao?: string;
    imagem?: string;
    precoUnitario?: number;
    precoPequeno?: number;
    precoMedio?: number;
    precoGrande?: number;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    vegana: boolean;
    descricao?: string;
    imagem?: string;
    precoUnitario?: number;
    precoPequeno?: number;
    precoMedio?: number;
    precoGrande?: number;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    vegana: boolean;
    descricao?: string;
    imagem?: string;
    precoUnitario?: number;
    precoPequeno?: number;
    precoMedio?: number;
    precoGrande?: number;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    vegana: boolean;
    descricao?: string;
    imagem?: string;
    precoUnitario?: number;
    precoPequeno?: number;
    precoMedio?: number;
    precoGrande?: number;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    vegana: boolean;
    descricao?: string;
    imagem?: string;
    precoUnitario?: number;
    precoPequeno?: number;
    precoMedio?: number;
    precoGrande?: number;
}>, {}> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    vegana: boolean;
    descricao?: string;
    imagem?: string;
    precoUnitario?: number;
    precoPequeno?: number;
    precoMedio?: number;
    precoGrande?: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const CardapioDeliveryResource: ResourceWithOptions;
export default CardapioDeliveryResource;
