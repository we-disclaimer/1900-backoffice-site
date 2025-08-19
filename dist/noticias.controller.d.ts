import { Model } from 'mongoose';
import { NoticiasModel } from './admin/resources/noticias.resource.js';
export declare class NoticiasController {
    private readonly noticiasModel;
    constructor(noticiasModel: Model<typeof NoticiasModel>);
    getAllNoticias(categoria?: string): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, {}> & {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    getNoticiasRecentes(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, {}> & {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    getCategorias(): Promise<any[]>;
    getNoticiaById(id: string): Promise<(import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, {}> & {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })>;
    getNoticiaBySlug(slug: string): Promise<(import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, {}> & {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        resumo: string;
        titulo: string;
        categorias: import("mongoose").Types.ObjectId[];
        dataPublicacao: NativeDate;
        conteudo: string;
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        slugPermanente?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })>;
}
