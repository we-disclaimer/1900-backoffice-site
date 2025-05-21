import { Model } from 'mongoose';
import { CardapioModel } from './admin/resources/cardapio.resource.js';
export declare class CardapioController {
    private readonly cardapioModel;
    constructor(cardapioModel: Model<typeof CardapioModel>);
    getAllCardapio(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        nome: string;
        categorias: import("mongoose").Types.ObjectId[];
        descricao?: string;
        mostrarNoDelivery?: boolean;
        mostrarNoJantar?: boolean;
        ordemNoMenu?: number;
        tituloSessao?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        nome: string;
        categorias: import("mongoose").Types.ObjectId[];
        descricao?: string;
        mostrarNoDelivery?: boolean;
        mostrarNoJantar?: boolean;
        ordemNoMenu?: number;
        tituloSessao?: string;
    }, {}> & {
        nome: string;
        categorias: import("mongoose").Types.ObjectId[];
        descricao?: string;
        mostrarNoDelivery?: boolean;
        mostrarNoJantar?: boolean;
        ordemNoMenu?: number;
        tituloSessao?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        nome: string;
        categorias: import("mongoose").Types.ObjectId[];
        descricao?: string;
        mostrarNoDelivery?: boolean;
        mostrarNoJantar?: boolean;
        ordemNoMenu?: number;
        tituloSessao?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        nome: string;
        categorias: import("mongoose").Types.ObjectId[];
        descricao?: string;
        mostrarNoDelivery?: boolean;
        mostrarNoJantar?: boolean;
        ordemNoMenu?: number;
        tituloSessao?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        nome: string;
        categorias: import("mongoose").Types.ObjectId[];
        descricao?: string;
        mostrarNoDelivery?: boolean;
        mostrarNoJantar?: boolean;
        ordemNoMenu?: number;
        tituloSessao?: string;
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
