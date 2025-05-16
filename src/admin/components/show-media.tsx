/* eslint-disable react/function-component-definition */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Box, Label } from '@adminjs/design-system';
import { BasePropertyProps } from 'adminjs';

const ShowProductImage: React.FC<BasePropertyProps> = ({ record }) => {
  const imageUrl = `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${record?.params?.mediaUrl}` || null;

  return (
    <Box mb="36px">
      <Label>Imagem do Produto</Label>
      {imageUrl ? (
        <Box mt="default">
          <img
            src={imageUrl}
            alt="Imagem do Produto"
            style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: 8 }}
          />
        </Box>
      ) : (
        <Box mt="default" color="grey60">
          Nenhuma imagem disponível
        </Box>
      )}
    </Box>
  );
};

export default ShowProductImage;
