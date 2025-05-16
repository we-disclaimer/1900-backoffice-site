import { Schema } from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
export declare const ValePizzaModel: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    dataVenda: NativeDate;
    codigoVoucher: string;
    quantidadeMaximaPorCpf: number;
    dataInicio: NativeDate;
    dataEncerramento: NativeDate;
    preco: number;
    conteudo?: string;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    dataVenda: NativeDate;
    codigoVoucher: string;
    quantidadeMaximaPorCpf: number;
    dataInicio: NativeDate;
    dataEncerramento: NativeDate;
    preco: number;
    conteudo?: string;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    dataVenda: NativeDate;
    codigoVoucher: string;
    quantidadeMaximaPorCpf: number;
    dataInicio: NativeDate;
    dataEncerramento: NativeDate;
    preco: number;
    conteudo?: string;
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
    dataVenda: NativeDate;
    codigoVoucher: string;
    quantidadeMaximaPorCpf: number;
    dataInicio: NativeDate;
    dataEncerramento: NativeDate;
    preco: number;
    conteudo?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    dataVenda: NativeDate;
    codigoVoucher: string;
    quantidadeMaximaPorCpf: number;
    dataInicio: NativeDate;
    dataEncerramento: NativeDate;
    preco: number;
    conteudo?: string;
}>, {}> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    dataVenda: NativeDate;
    codigoVoucher: string;
    quantidadeMaximaPorCpf: number;
    dataInicio: NativeDate;
    dataEncerramento: NativeDate;
    preco: number;
    conteudo?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const ValePizzaResource: ResourceWithOptions;
export default ValePizzaResource;
