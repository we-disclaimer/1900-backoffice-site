import React from 'react';
import { Box } from '@adminjs/design-system';
const FormattedDate = ({ record, property }) => {
    const rawValue = record.params[property.path];
    if (!rawValue)
        return null;
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
    return (React.createElement(Box, null,
        formatted,
        ' ',
        time));
};
export default FormattedDate;
//# sourceMappingURL=formatted-date.js.map