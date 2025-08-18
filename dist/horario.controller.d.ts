import { Model } from 'mongoose';
import { HorarioModel } from './admin/resources/horario.resource.js';
export declare class HorarioController {
    private readonly horarioModel;
    constructor(horarioModel: Model<typeof HorarioModel>);
    getAllHorarios(periodo?: string, ativo?: string): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
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
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    getHorariosByPeriodo(periodo: string): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
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
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[] | {
        error: string;
    }>;
    getHorariosAtivos(): Promise<((import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
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
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    getHorarioById(id: string): Promise<(import("mongoose").FlattenMaps<Model<any, {}, {}, {}, any, any>> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").FlattenMaps<Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
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
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
    }>, {}> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        nome: string;
        horarioInicio: string;
        horarioFim: string;
        periodo: "AM" | "PM";
        ativo: boolean;
        observacoes?: string;
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
