import { Model } from 'mongoose';
import { PostModel } from './admin/resources/post.resource.js';
export declare class ProductsController {
    private readonly produtoModel;
    constructor(produtoModel: Model<typeof PostModel>);
    getAllProducts(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        titulo: string;
        dataDeCriacao: NativeDate;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        titulo: string;
        dataDeCriacao: NativeDate;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    }, {}> & {
        titulo: string;
        dataDeCriacao: NativeDate;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        titulo: string;
        dataDeCriacao: NativeDate;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        titulo: string;
        dataDeCriacao: NativeDate;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        titulo: string;
        dataDeCriacao: NativeDate;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
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
