import React from 'react';
import { Box, Label } from '@adminjs/design-system';
const ShowProductImage = ({ record, property }) => {
    if (!record || !property)
        return null;
    console.log('record', record);
    const fieldName = property.name;
    const mediaKey = `${fieldName}Url`;
    const mediaPath = record.params?.[mediaKey];
    const imageUrl = mediaPath
        ? `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${mediaPath}`
        : null;
    return (React.createElement(Box, { mb: "36px" },
        React.createElement(Label, null, property.label || 'Imagem'),
        imageUrl ? (React.createElement(Box, { mt: "default" },
            React.createElement("img", { src: imageUrl, alt: `Imagem - ${fieldName}`, style: { maxWidth: '100%', maxHeight: '300px', borderRadius: 8 } }))) : (React.createElement(Box, { mt: "default", color: "grey60" }, "Nenhuma imagem dispon\u00EDvel"))));
};
export default ShowProductImage;
//# sourceMappingURL=show-media.js.map