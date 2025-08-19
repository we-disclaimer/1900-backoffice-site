import { Model } from 'mongoose';
import { UnidadeModel } from './admin/resources/unidades.resource.js';
export declare class UnidadesController {
    private readonly unidadeModel;
    constructor(unidadeModel: Model<typeof UnidadeModel>);
    getAllStores(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }, {}> & {
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    getByUrlCustomizada(urlCustomizada: string): Promise<(import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }, {}> & {
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        nome: string;
        criadoEm: NativeDate;
        urlCustomizada: string;
        metaTagTitle?: string;
        metaTagDescription?: string;
        resumo?: string;
        mediaCapa?: import("mongoose").Types.ObjectId;
        mediaPrincipal?: import("mongoose").Types.ObjectId;
        mediaSecundaria?: import("mongoose").Types.ObjectId;
        linkVideo?: string;
        descricao?: string;
        codigoGoogleMaps?: string;
        linkGoogleMaps?: string;
        codigoReservas?: string;
        tags?: string;
        outrasInformacoes?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        message: string;
    }>;
}
