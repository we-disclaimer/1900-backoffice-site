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
        tags?: string;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        precoMedio?: number;
        precoGrande?: number;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        codigoIntegracao?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        dataDeCriacao: NativeDate;
        titulo: string;
        tags?: string;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        precoMedio?: number;
        precoGrande?: number;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        codigoIntegracao?: string;
    }, {}> & {
        dataDeCriacao: NativeDate;
        titulo: string;
        tags?: string;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        precoMedio?: number;
        precoGrande?: number;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        codigoIntegracao?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        dataDeCriacao: NativeDate;
        titulo: string;
        tags?: string;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        precoMedio?: number;
        precoGrande?: number;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        codigoIntegracao?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        dataDeCriacao: NativeDate;
        titulo: string;
        tags?: string;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        precoMedio?: number;
        precoGrande?: number;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
        codigoIntegracao?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        dataDeCriacao: NativeDate;
        titulo: string;
        tags?: string;
        media?: import("mongoose").Types.ObjectId;
        descricao?: string;
        precoMedio?: number;
        precoGrande?: number;
        categoria?: import("mongoose").Types.ObjectId;
        precoUnico?: number;
        precoIndividual?: number;
        jantar?: boolean;
        delivery?: boolean;
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
