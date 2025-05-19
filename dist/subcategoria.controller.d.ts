import { Model } from 'mongoose';
import { CategoriaModel } from './admin/resources/subcategoria.resource.js';
export declare class CategoriaController {
    private readonly categoriaModel;
    constructor(categoriaModel: Model<typeof CategoriaModel>);
    getAllCategoria(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
        timestamps: true;
    }, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    getCategoriasByIds(ids: string): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
        timestamps: true;
    }, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        mostrarNoDelivery: boolean;
        mostrarNoJantar: boolean;
        ordemNoMenu: number;
        descricao?: string;
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
