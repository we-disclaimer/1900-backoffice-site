import { Model } from 'mongoose';
import { TeatroModel } from './admin/resources/teatro.resource.js';
export declare class TeatroController {
    private readonly teatroModel;
    constructor(teatroModel: Model<typeof TeatroModel>);
    getAllTeatros(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        nome: string;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        nome: string;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
    }, {}> & {
        nome: string;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        nome: string;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        nome: string;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
    }>, {}> & import("mongoose").FlatRecord<{
        nome: string;
        descricao?: string;
        media?: import("mongoose").Types.ObjectId;
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
