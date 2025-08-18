/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'adminjs';
import { 
  FormGroup, 
  Label, 
  Box, 
  Text 
} from '@adminjs/design-system';

interface PeriodoSelectProps extends BasePropertyProps {}

const PeriodoSelect: React.FC<PeriodoSelectProps> = ({ property, record, onChange }) => {
  const [selectedPeriodo, setSelectedPeriodo] = useState<string>('');

  useEffect(() => {
    // Inicializar com valor atual se existir
    const currentValue = record?.params?.[property.name] || '';
    setSelectedPeriodo(currentValue);
  }, [record, property.name]);

  const handlePeriodoChange = (periodo: string) => {
    setSelectedPeriodo(periodo);
    if (onChange) {
      onChange(property.name, periodo);
    }
  };

  const periodos = [
    { value: 'AM', label: 'AM (Manhã)', icon: '🌅' },
    { value: 'PM', label: 'PM (Tarde/Noite)', icon: '🌆' }
  ];

  return (
    <FormGroup>
      <Label>
        {property.label || 'Período'}
        {property.isRequired && <span style={{ color: 'red' }}> *</span>}
      </Label>
      
      <Box mt="xs">
        <Text variant="sm" color="grey60" mb="sm">
          Selecione o período do horário
        </Text>
        
        <Box style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {periodos.map(periodo => {
            const isSelected = selectedPeriodo === periodo.value;
            return (
              <Box
                key={periodo.value}
                onClick={() => handlePeriodoChange(periodo.value)}
                style={{
                  padding: '12px 20px',
                  border: isSelected ? '2px solid #0c4a2b' : '2px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#e8f5e8' : 'white',
                  minWidth: '140px',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  userSelect: 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = '#999';
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = '#ddd';
                    e.currentTarget.style.backgroundColor = 'white';
                  }
                }}
              >
                <Box style={{ fontSize: '24px', marginBottom: '4px' }}>
                  {periodo.icon}
                </Box>
                <Text 
                  style={{ 
                    fontWeight: isSelected ? 'bold' : 'normal',
                    color: isSelected ? '#0c4a2b' : '#333'
                  }}
                >
                  {periodo.label}
                </Text>
              </Box>
            );
          })}
        </Box>
        
        {selectedPeriodo && (
          <Box mt="sm" p="xs" style={{ backgroundColor: '#e8f5e8', borderRadius: '4px' }}>
            <Text variant="sm" style={{ color: '#0c4a2b' }}>
              ✅ Período selecionado: <strong>{selectedPeriodo}</strong>
            </Text>
          </Box>
        )}
        
        {property.description && (
          <Text variant="sm" color="grey60" mt="xs">
            {property.description}
          </Text>
        )}
      </Box>
    </FormGroup>
  );
};

export default PeriodoSelect;
