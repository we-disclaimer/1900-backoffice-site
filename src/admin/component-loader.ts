/* eslint-disable max-len */
import path from 'path';

import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

// Registra o componente do upload
componentLoader.add('CustomUploadEdit', path.resolve('src/admin/components/upload-edit.tsx'));
componentLoader.add('Thumb', path.resolve('src/admin/components/thumb.tsx'));
componentLoader.add('GroupedPrices', path.resolve('src/admin/components/grouped-prices.tsx'));
componentLoader.add('GroupedDisponibilities', path.resolve('src/admin/components/grouped-disponibilities.tsx'));
componentLoader.add('ShowProductImage', path.resolve('src/admin/components/show-media.tsx'));
componentLoader.add('FormattedDate', path.resolve('src/admin/components/formatted-date.tsx'));
componentLoader.add('RedirectDashboard', path.resolve('src/admin/components/redirect-dashboard.tsx'));
componentLoader.add('SyncPricesAction', path.resolve('src/admin/components/sync-button.tsx'));
componentLoader.add('CategoriaSelectReal', path.resolve('src/admin/components/categoria-select-real.tsx'));
componentLoader.add('PeriodoSelect', path.resolve('src/admin/components/periodo-select.tsx'));
componentLoader.add('TinyMCEEditor', path.resolve('src/admin/components/tinymce-editor.tsx'));
componentLoader.add('QuillEditor', path.resolve('src/admin/components/quill-editor.tsx'));
componentLoader.add('BlockBuilder', path.resolve('src/admin/components/block-builder.tsx'));
componentLoader.add('TiptapEditor', path.resolve('src/admin/components/tiptap-editor.tsx'));
componentLoader.add('VisualComposer', path.resolve('src/admin/components/visual-composer.tsx'));

export default componentLoader;
