import { Schema } from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const HomeSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
}>;
declare const HomeModel: import("mongoose").Model<{
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
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
}>>;
declare const HomeResource: ResourceWithOptions;
export { HomeResource, HomeSchema, HomeModel };
