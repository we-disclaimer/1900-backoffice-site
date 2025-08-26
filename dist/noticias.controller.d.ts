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
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, {}> & {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
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
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, {}> & {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
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
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, {}> & {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
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
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, {}> & {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        titulo: string;
        resumo: string;
        conteudo: string;
        categorias: import("mongoose").Types.ObjectId[];
        curtidas: number;
        fotoDestaque?: import("mongoose").Types.ObjectId;
        dataPublicacao?: NativeDate;
        slugPermanente?: string;
        metaTitle?: string;
        metaDescription?: string;
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
