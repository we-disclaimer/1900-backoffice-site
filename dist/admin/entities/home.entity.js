import { Schema, model } from 'mongoose';
const HomeSchema = new Schema({
    title: { type: String, required: true },
    subtitle: String,
    bannerImage: String,
    content: String,
    metaTagTitle: String,
    metaTagDescription: String,
}, { timestamps: true });
export const HomeModel = model('Home', HomeSchema);
export const HomeResource = {
    resource: HomeModel,
    options: {
        listProperties: ['title', 'metaTagTitle', 'metaTagDescription'],
        actions: {
            list: { isAccessible: true },
            new: { isAccessible: true },
            delete: { isAccessible: true },
            editHome: {
                actionType: 'resource',
                name: 'Editar Página Home',
                icon: 'Edit',
                isVisible: true,
                handler: async (request, response, context) => {
                    const records = await context.resource.findMany([]);
                    const record = records[0];
                    if (!record) {
                        throw new Error('Nenhum registro da Home encontrado.');
                    }
                    return {
                        redirectUrl: context.h.recordActionUrl({
                            resourceId: context.resource.id(),
                            actionName: 'edit',
                            recordId: record.id(),
                        }),
                    };
                },
            },
        },
        properties: {
            _id: { isVisible: false },
            createdAt: { isVisible: false },
            updatedAt: { isVisible: false },
        },
    },
};
export default HomeResource;
//# sourceMappingURL=home.entity.js.map