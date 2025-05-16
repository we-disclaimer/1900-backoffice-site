import { Schema } from 'mongoose';
export declare const UnidadeModel: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    endereco: string;
    descricao: string;
    fotoPrincipal: string;
    linkReserva: string;
    video?: string;
    outrasInformacoes?: {
        wifi: boolean;
        valet: boolean;
        acessibilidade: boolean;
        capacidade: number;
        permitidoPet: boolean;
    };
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    endereco: string;
    descricao: string;
    fotoPrincipal: string;
    linkReserva: string;
    video?: string;
    outrasInformacoes?: {
        wifi: boolean;
        valet: boolean;
        acessibilidade: boolean;
        capacidade: number;
        permitidoPet: boolean;
    };
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    endereco: string;
    descricao: string;
    fotoPrincipal: string;
    linkReserva: string;
    video?: string;
    outrasInformacoes?: {
        wifi: boolean;
        valet: boolean;
        acessibilidade: boolean;
        capacidade: number;
        permitidoPet: boolean;
    };
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
    endereco: string;
    descricao: string;
    fotoPrincipal: string;
    linkReserva: string;
    video?: string;
    outrasInformacoes?: {
        wifi: boolean;
        valet: boolean;
        acessibilidade: boolean;
        capacidade: number;
        permitidoPet: boolean;
    };
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    endereco: string;
    descricao: string;
    fotoPrincipal: string;
    linkReserva: string;
    video?: string;
    outrasInformacoes?: {
        wifi: boolean;
        valet: boolean;
        acessibilidade: boolean;
        capacidade: number;
        permitidoPet: boolean;
    };
}>, {}> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    endereco: string;
    descricao: string;
    fotoPrincipal: string;
    linkReserva: string;
    video?: string;
    outrasInformacoes?: {
        wifi: boolean;
        valet: boolean;
        acessibilidade: boolean;
        capacidade: number;
        permitidoPet: boolean;
    };
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
