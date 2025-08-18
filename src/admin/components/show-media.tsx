/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Box, Label } from '@adminjs/design-system';
import { BasePropertyProps } from 'adminjs';

const ShowProductImage: React.FC<BasePropertyProps> = ({ record, property }) => {
  if (!record || !property) return null;

  const fieldName = property.name; // mediaCapa, mediaPrincipal, etc.
  const mediaKey = `${fieldName}Url`; // bannerUrl, etc.
  const altKey = `${fieldName}Alt`;

  const mediaPath = record.params?.[mediaKey];
  const altText = record.params?.[altKey] || '';

  // Verificar se a URL já é completa ou se precisa ser concatenada
  const fullUrl = mediaPath
    ? (mediaPath.startsWith('http') 
        ? mediaPath 
        : `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${mediaPath}`)
    : null;

  return (
    <Box mb="36px">
      <Label>{property.label || 'Imagem'}</Label>
      {fullUrl ? (
        <Box mt="default">
          {fullUrl.endsWith('.mp4') ? (
            <video
              src={fullUrl}
              style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: 8 }}
              controls
            />
          ) : (
            <img
              src={fullUrl}
              alt={altText || `Imagem - ${fieldName}`}
              style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: 8 }}
            />
          )}
          {altText && (
            <Box mt="sm" color="grey60">
              {altText}
            </Box>
          )}
        </Box>
      ) : (
        <Box mt="default" color="grey60">
          {altText || 'Nenhum arquivo disponível'}
        </Box>
      )}
    </Box>
  );
};

export default ShowProductImage;
