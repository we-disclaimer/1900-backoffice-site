import React from 'react';
import { Box, Label, CheckBox } from '@adminjs/design-system';
const GroupedDisponibilities = ({ record, onChange }) => {
    const jantar = record.params.jantar ?? false;
    const delivery = record.params.delivery ?? false;
    const handleChangeJantar = (e) => {
        onChange('jantar', e.target.checked);
    };
    const handleChangeDelivery = (e) => {
        onChange('delivery', e.target.checked);
    };
    return (React.createElement(Box, null,
        React.createElement(Label, { fontWeight: "bold", mb: "default" }, "Tipos de card\u00E1pios"),
        React.createElement(Box, { display: "flex", gap: "lg", flexWrap: "wrap", mb: "36px" },
            React.createElement(Box, { width: "50%", display: "flex", alignItems: "center", gap: "sm" },
                React.createElement(Label, { htmlFor: "jantar", display: "flex", alignItems: "center", cursor: "pointer", gap: "sm" },
                    React.createElement(CheckBox, { id: "jantar", checked: jantar, onChange: handleChangeJantar, "aria-label": "Dispon\u00EDvel para Jantar", style: { marginRight: '0.5rem' } }),
                    ' ',
                    ' ',
                    "Dispon\u00EDvel para Jantar")),
            React.createElement(Box, { width: "50%", display: "flex", alignItems: "center", gap: "sm" },
                React.createElement(Label, { htmlFor: "delivery", display: "flex", alignItems: "center", cursor: "pointer", gap: "sm" },
                    React.createElement(CheckBox, { id: "delivery", checked: delivery, onChange: handleChangeDelivery, "aria-label": "Dispon\u00EDvel para Delivery", style: { marginRight: '0.5rem' } }),
                    ' ',
                    ' ',
                    "Dispon\u00EDvel para Delivery")))));
};
export default GroupedDisponibilities;
//# sourceMappingURL=grouped-disponibilities.js.map