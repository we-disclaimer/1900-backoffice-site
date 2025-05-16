/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Box, Label, Input, FormGroup,
} from '@adminjs/design-system';

function GroupedPrices(props) {
  const { record, onChange } = props;

  const precoUnico = record.params.precoUnico || '';
  const precoMedio = record.params.precoMedio || '';
  const precoGrande = record.params.precoGrande || '';
  const precoIndividual = record.params.precoIndividual || '';

  const handleChange = (field) => (event) => {
    onChange(field, event.target.value);
  };

  return (
    <Box display="flex" flexDirection="row" gap="10px" width="100%">
      <Box
        width="25%"
        mr="10px"
        mb="36px"
      >
        <FormGroup>
          <Label>Preço Único</Label>
          <Input
            type="number"
            value={precoUnico}
            onChange={handleChange('precoUnico')}
            step="0.01"
          />
        </FormGroup>
      </Box>
      <Box
        width="25%"
        mr="10px"
        mb="36px"
      >
        <FormGroup>
          <Label>Preço Médio</Label>
          <Input
            type="number"
            value={precoMedio}
            onChange={handleChange('precoMedio')}
            step="0.01"
          />
        </FormGroup>
      </Box>
      <Box
        width="25%"
        mr="10px"
        mb="36px"
      >
        <FormGroup>
          <Label>Preço Grande</Label>
          <Input
            type="number"
            value={precoGrande}
            onChange={handleChange('precoGrande')}
            step="0.01"
          />
        </FormGroup>
      </Box>
      <Box width="25%">
        <FormGroup>
          <Label>Preço Individual</Label>
          <Input
            type="number"
            value={precoIndividual}
            onChange={handleChange('precoIndividual')}
            step="0.01"
          />
        </FormGroup>
      </Box>
    </Box>
  );
}

export default GroupedPrices;
