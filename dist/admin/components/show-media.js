import React from 'react';
import { Box, Label } from '@adminjs/design-system';
const ShowProductImage = ({ record, property }) => {
    if (!record || !property)
        return null;
    console.log('record', record);
    const fieldName = property.name;
    const mediaKey = `${fieldName}Url`;
    const altKey = `${fieldName}Alt`;
    const mediaPath = record.params?.[mediaKey];
    const altText = record.params?.[altKey] || '';
    const fullUrl = mediaPath
        ? `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${mediaPath}`
        : null;
    return (React.createElement(Box, { mb: "36px" },
        React.createElement(Label, null, property.label || 'Imagem'),
        fullUrl ? (React.createElement(Box, { mt: "default" },
            fullUrl.endsWith('.mp4') ? (React.createElement("video", { src: fullUrl, style: { maxWidth: '100%', maxHeight: '300px', borderRadius: 8 }, controls: true })) : (React.createElement("img", { src: fullUrl, alt: altText || `Imagem - ${fieldName}`, style: { maxWidth: '100%', maxHeight: '300px', borderRadius: 8 } })),
            altText && (React.createElement(Box, { mt: "sm", color: "grey60" }, altText)))) : (React.createElement(Box, { mt: "default", color: "grey60" }, altText || 'Nenhum arquivo disponível'))));
};
export default ShowProductImage;
//# sourceMappingURL=show-media.js.map