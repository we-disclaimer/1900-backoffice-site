/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Box, Label } from '@adminjs/design-system';
import { BasePropertyProps } from 'adminjs';

const ShowProductImage: React.FC<BasePropertyProps> = ({ record, property }) => {
  if (!record || !property) return null;

  const fieldName = property.name; // mediaCapa, mediaPrincipal, etc.
  const mediaKey = `${fieldName}Url`; // mediaCapaUrl, etc.
  const mediaPath = record.params?.[mediaKey];

  const imageUrl = mediaPath
    ? `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${mediaPath}`
    : null;

  return (
    <Box mb="36px">
      <Label>{property.label || 'Imagem'}</Label>
      {imageUrl ? (
        <Box mt="default">
          <img
            src={imageUrl}
            alt={`Imagem - ${fieldName}`}
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
