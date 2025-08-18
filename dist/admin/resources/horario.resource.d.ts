import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const HorarioSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
declare const HorarioModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nome: string;
    horarioInicio: string;
    horarioFim: string;
    periodo: "AM" | "PM";
    ativo: boolean;
    observacoes?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const HorarioResource: ResourceWithOptions;
export { HorarioResource, HorarioModel, HorarioSchema };
