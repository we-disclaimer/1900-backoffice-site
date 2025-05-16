import React from 'react';
import { Box, Label } from '@adminjs/design-system';
const ShowProductImage = ({ record }) => {
    const imageUrl = `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${record?.params?.mediaUrl}` || null;
    return (React.createElement(Box, { mb: "36px" },
        React.createElement(Label, null, "Imagem do Produto"),
        imageUrl ? (React.createElement(Box, { mt: "default" },
            React.createElement("img", { src: imageUrl, alt: "Imagem do Produto", style: { maxWidth: '100%', maxHeight: '300px', borderRadius: 8 } }))) : (React.createElement(Box, { mt: "default", color: "grey60" }, "Nenhuma imagem dispon\u00EDvel"))));
};
export default ShowProductImage;
//# sourceMappingURL=show-media.js.map