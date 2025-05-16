/* eslint-disable react/function-component-definition */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { BasePropertyProps } from 'adminjs';
import { Box } from '@adminjs/design-system';

const FormattedDate: React.FC<BasePropertyProps> = ({ record, property }) => {
  const rawValue = record.params[property.path];

  if (!rawValue) return null;

  const date = new Date(rawValue);
  const formatted = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const time = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Box>
      {formatted}
      {' '}
      {time}
    </Box>
  );
};

export default FormattedDate;
