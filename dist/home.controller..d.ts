import { Model } from 'mongoose';
import { HomeModel } from './admin/entities/home.entity.js';
export declare class HomeController {
    private readonly homeModel;
    constructor(homeModel: Model<typeof HomeModel>);
    getAllTeatros(): Promise<(import("mongoose").FlattenMaps<Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        media?: import("mongoose").Types.ObjectId;
        metaTagTitle?: string;
        metaTagDescription?: string;
        subtitle?: string;
        bannerImage?: string;
        content?: string;
        buttonText?: string;
        buttonLink?: string;
        bannerDescription?: string;
        bannerTitle?: string;
        banner?: import("mongoose").Types.ObjectId;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        media?: import("mongoose").Types.ObjectId;
        metaTagTitle?: string;
        metaTagDescription?: string;
        subtitle?: string;
        bannerImage?: string;
        content?: string;
        buttonText?: string;
        buttonLink?: string;
        bannerDescription?: string;
        bannerTitle?: string;
        banner?: import("mongoose").Types.ObjectId;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        media?: import("mongoose").Types.ObjectId;
        metaTagTitle?: string;
        metaTagDescription?: string;
        subtitle?: string;
        bannerImage?: string;
        content?: string;
        buttonText?: string;
        buttonLink?: string;
        bannerDescription?: string;
        bannerTitle?: string;
        banner?: import("mongoose").Types.ObjectId;
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
        title: string;
        media?: import("mongoose").Types.ObjectId;
        metaTagTitle?: string;
        metaTagDescription?: string;
        subtitle?: string;
        bannerImage?: string;
        content?: string;
        buttonText?: string;
        buttonLink?: string;
        bannerDescription?: string;
        bannerTitle?: string;
        banner?: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        media?: import("mongoose").Types.ObjectId;
        metaTagTitle?: string;
        metaTagDescription?: string;
        subtitle?: string;
        bannerImage?: string;
        content?: string;
        buttonText?: string;
        buttonLink?: string;
        bannerDescription?: string;
        bannerTitle?: string;
        banner?: import("mongoose").Types.ObjectId;
    }>, {}> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        media?: import("mongoose").Types.ObjectId;
        metaTagTitle?: string;
        metaTagDescription?: string;
        subtitle?: string;
        bannerImage?: string;
        content?: string;
        buttonText?: string;
        buttonLink?: string;
        bannerDescription?: string;
        bannerTitle?: string;
        banner?: import("mongoose").Types.ObjectId;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
