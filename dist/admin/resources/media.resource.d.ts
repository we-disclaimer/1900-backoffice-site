import mongoose from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
declare const MediaModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<{
    dataDeCriacao: NativeDate;
    url?: string;
    alt?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    dataDeCriacao: NativeDate;
    url?: string;
    alt?: string;
}, {}> & {
    dataDeCriacao: NativeDate;
    url?: string;
    alt?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    dataDeCriacao: NativeDate;
    url?: string;
    alt?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    url?: string;
    alt?: string;
}>, {}> & mongoose.FlatRecord<{
    dataDeCriacao: NativeDate;
    url?: string;
    alt?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const MediaResource: ResourceWithOptions;
export { MediaResource, MediaModel };
