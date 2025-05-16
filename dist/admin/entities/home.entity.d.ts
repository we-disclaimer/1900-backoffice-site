import { Schema } from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
export declare const HomeModel: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subtitle?: string;
    bannerImage?: string;
    content?: string;
    metaTagTitle?: string;
    metaTagDescription?: string;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subtitle?: string;
    bannerImage?: string;
    content?: string;
    metaTagTitle?: string;
    metaTagDescription?: string;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subtitle?: string;
    bannerImage?: string;
    content?: string;
    metaTagTitle?: string;
    metaTagDescription?: string;
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
    subtitle?: string;
    bannerImage?: string;
    content?: string;
    metaTagTitle?: string;
    metaTagDescription?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subtitle?: string;
    bannerImage?: string;
    content?: string;
    metaTagTitle?: string;
    metaTagDescription?: string;
}>, {}> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subtitle?: string;
    bannerImage?: string;
    content?: string;
    metaTagTitle?: string;
    metaTagDescription?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const HomeResource: ResourceWithOptions;
export default HomeResource;
