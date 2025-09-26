import { Model } from 'mongoose';
import { MusicaisModel } from './admin/resources/musicais.js';
export declare class MusicaisController {
    private readonly musicaisModel;
    constructor(musicaisModel: Model<typeof MusicaisModel>);
    getAllMusicais(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, {}> & {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }>, {}> & import("mongoose").FlatRecord<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    getMusicaisEmBreve(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, {}> & {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }>, {}> & import("mongoose").FlatRecord<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    getMusicaisFinalizados(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, {}> & {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }>, {}> & import("mongoose").FlatRecord<{
        nome: string;
        emBreve: boolean;
        finalizado: boolean;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        linkDaCompra?: string;
        dataDivulgacao?: NativeDate;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
}
