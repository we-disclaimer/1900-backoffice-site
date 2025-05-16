/* eslint-disable react/function-component-definition */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Box, Label, CheckBox } from '@adminjs/design-system';
import type { BasePropertyProps } from 'adminjs';

const GroupedDisponibilities: React.FC<BasePropertyProps> = ({ record, onChange }) => {
  const jantar = record.params.jantar ?? false;
  const delivery = record.params.delivery ?? false;

  const handleChangeJantar = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange('jantar', e.target.checked);
  };

  const handleChangeDelivery = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange('delivery', e.target.checked);
  };

  return (
    <Box>
      <Label fontWeight="bold" mb="default">
        Tipos de cardápios
      </Label>
      <Box display="flex" gap="lg" flexWrap="wrap" mb="36px">
        <Box width="50%" display="flex" alignItems="center" gap="sm">
          <CheckBox
            id="jantar"
            checked={jantar}
            onChange={handleChangeJantar}
            aria-label="Disponível para Jantar"
          />
          <Label htmlFor="jantar">Disponível para Jantar</Label>
        </Box>
        <Box width="50%" display="flex" alignItems="center" gap="sm">
          <CheckBox
            id="delivery"
            checked={delivery}
            onChange={handleChangeDelivery}
            aria-label="Disponível para Delivery"
          />
          <Label htmlFor="delivery">Disponível para Delivery</Label>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupedDisponibilities;
