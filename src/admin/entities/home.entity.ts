import { Schema, model } from 'mongoose';
import { ResourceWithOptions } from 'adminjs';
import { MediaModel } from '../resources/media.resource.js';

// Definição do esquema da Home
const HomeSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: String,
    bannerImage: String,
    content: String,
    metaTagTitle: String,
    metaTagDescription: String,
    // Novo campo de mídia (vídeo ou imagem)
    media: { type: Schema.Types.ObjectId, ref: 'Media' },

    // Campos de botão (texto e link)
    buttonText: String,
    buttonLink: String,

    // Banner principal (mp4/webp) + descrição
    banner: { type: Schema.Types.ObjectId, ref: 'Media' },
    bannerDescription: String,

    // Título do banner
    bannerTitle: String,
  },
  { timestamps: true },
);

const HomeModel = model('Home', HomeSchema);

const HomeResource: ResourceWithOptions = {
  resource: HomeModel,
  options: {
    listProperties: ['title', 'metaTagTitle', 'metaTagDescription'], // ✅ exibidos na listagem
    editProperties: [
      'title',
      'subtitle',
      'metaTagTitle',
      'metaTagDescription',
      'buttonText',
      'buttonLink',
      'banner',
      'bannerTitle',
      'bannerDescription',
    ],

    showProperties: [
      'title',
      'subtitle',
      'metaTagTitle',
      'metaTagDescription',
      'buttonText',
      'buttonLink',
      'banner',
      'bannerTitle',
      'bannerDescription',
    ],
    properties: {
      _id: { isVisible: false },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },

      // Referências de media e banner
      media: {
        reference: 'Media',
        isArray: false,
        isVisible: false, // oculto nos formulários e exibição
      },
      content: { isVisible: false },
      banner: {
        reference: 'Media',
        isArray: false,
        components: {
          show: 'ShowProductImage',
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        label: 'Banner',
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ /* @ts-ignore */ group: 'Banner',
      },

      // Traduções de labels (portugues sem acento)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      title: { label: 'Titulo' },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      subtitle: { label: 'Subtitulo' },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      metaTagTitle: { label: 'Meta Tag Titulo' },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      metaTagDescription: { label: 'Meta Tag Descricao' },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      buttonText: { label: 'Texto do Botao', /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ /* @ts-ignore */ group: 'Banner' },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      buttonLink: { label: 'Link do Botao', /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ /* @ts-ignore */ group: 'Banner' },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bannerTitle: { /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ /* @ts-ignore */ label: 'Titulo do Banner', /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ /* @ts-ignore */ group: 'Banner' },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bannerDescription: { /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ /* @ts-ignore */ label: 'Descricao do Banner', /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ /* @ts-ignore */ group: 'Banner' },
    },
    actions: {
      list: { isAccessible: true },
      new: { isAccessible: true },
      delete: { isAccessible: true },

      show: {
        after: async (response, request, context) => {
          const { record } = context;

          if (record?.params?.banner) {
            const mediaDoc = await (MediaModel as any).findById(record.params.banner).lean().exec();
            if (mediaDoc) {
              record.params.bannerUrl = mediaDoc.url;
              record.params.bannerAlt = mediaDoc.alt;
            }
          }

          return response;
        },
      },

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
  },
};

export { HomeResource, HomeSchema, HomeModel };
