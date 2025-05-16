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

export default componentLoader;
