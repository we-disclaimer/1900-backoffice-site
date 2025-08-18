import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Box, Text } from '@adminjs/design-system';
const PeriodoSelect = ({ property, record, onChange }) => {
    const [selectedPeriodo, setSelectedPeriodo] = useState('');
    useEffect(() => {
        const currentValue = record?.params?.[property.name] || '';
        setSelectedPeriodo(currentValue);
    }, [record, property.name]);
    const handlePeriodoChange = (periodo) => {
        setSelectedPeriodo(periodo);
        if (onChange) {
            onChange(property.name, periodo);
        }
    };
    const periodos = [
        { value: 'AM', label: 'AM (Manhã)', icon: '🌅' },
        { value: 'PM', label: 'PM (Tarde/Noite)', icon: '🌆' }
    ];
    return (React.createElement(FormGroup, null,
        React.createElement(Label, null,
            property.label || 'Período',
            property.isRequired && React.createElement("span", { style: { color: 'red' } }, " *")),
        React.createElement(Box, { mt: "xs" },
            React.createElement(Text, { variant: "sm", color: "grey60", mb: "sm" }, "Selecione o per\u00EDodo do hor\u00E1rio"),
            React.createElement(Box, { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } }, periodos.map(periodo => {
                const isSelected = selectedPeriodo === periodo.value;
                return (React.createElement(Box, { key: periodo.value, onClick: () => handlePeriodoChange(periodo.value), style: {
                        padding: '12px 20px',
                        border: isSelected ? '2px solid #0c4a2b' : '2px solid #ddd',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        backgroundColor: isSelected ? '#e8f5e8' : 'white',
                        minWidth: '140px',
                        textAlign: 'center',
                        transition: 'all 0.2s ease',
                        userSelect: 'none'
                    }, onMouseEnter: (e) => {
                        if (!isSelected) {
                            e.currentTarget.style.borderColor = '#999';
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                        }
                    }, onMouseLeave: (e) => {
                        if (!isSelected) {
                            e.currentTarget.style.borderColor = '#ddd';
                            e.currentTarget.style.backgroundColor = 'white';
                        }
                    } },
                    React.createElement(Box, { style: { fontSize: '24px', marginBottom: '4px' } }, periodo.icon),
                    React.createElement(Text, { style: {
                            fontWeight: isSelected ? 'bold' : 'normal',
                            color: isSelected ? '#0c4a2b' : '#333'
                        } }, periodo.label)));
            })),
            selectedPeriodo && (React.createElement(Box, { mt: "sm", p: "xs", style: { backgroundColor: '#e8f5e8', borderRadius: '4px' } },
                React.createElement(Text, { variant: "sm", style: { color: '#0c4a2b' } },
                    "\u2705 Per\u00EDodo selecionado: ",
                    React.createElement("strong", null, selectedPeriodo)))),
            property.description && (React.createElement(Text, { variant: "sm", color: "grey60", mt: "xs" }, property.description)))));
};
export default PeriodoSelect;
//# sourceMappingURL=periodo-select.js.map