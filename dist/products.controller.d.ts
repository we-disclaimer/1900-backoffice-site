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
        dataDeCriacao: NativeDate;
        titulo: string;
        categoria?: import("mongoose").Types.ObjectId;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        dataDeCriacao: NativeDate;
        titulo: string;
        categoria?: import("mongoose").Types.ObjectId;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    }, {}> & {
        dataDeCriacao: NativeDate;
        titulo: string;
        categoria?: import("mongoose").Types.ObjectId;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
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
        dataDeCriacao: NativeDate;
        titulo: string;
        categoria?: import("mongoose").Types.ObjectId;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        dataDeCriacao: NativeDate;
        titulo: string;
        categoria?: import("mongoose").Types.ObjectId;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoMedio?: number;
        precoGrande?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        tags?: string;
        codigoIntegracao?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        dataDeCriacao: NativeDate;
        titulo: string;
        categoria?: import("mongoose").Types.ObjectId;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
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
