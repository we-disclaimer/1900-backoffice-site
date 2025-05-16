import React from 'react';
import { Box, Label, Input, FormGroup, } from '@adminjs/design-system';
function GroupedPrices(props) {
    const { record, onChange } = props;
    const precoUnico = record.params.precoUnico || '';
    const precoMedio = record.params.precoMedio || '';
    const precoGrande = record.params.precoGrande || '';
    const precoIndividual = record.params.precoIndividual || '';
    const handleChange = (field) => (event) => {
        onChange(field, event.target.value);
    };
    return (React.createElement(Box, { display: "flex", flexDirection: "row", gap: "10px", width: "100%" },
        React.createElement(Box, { width: "25%", mr: "10px", mb: "36px" },
            React.createElement(FormGroup, null,
                React.createElement(Label, null, "Pre\u00E7o \u00DAnico"),
                React.createElement(Input, { type: "number", value: precoUnico, onChange: handleChange('precoUnico'), step: "0.01" }))),
        React.createElement(Box, { width: "25%", mr: "10px", mb: "36px" },
            React.createElement(FormGroup, null,
                React.createElement(Label, null, "Pre\u00E7o M\u00E9dio"),
                React.createElement(Input, { type: "number", value: precoMedio, onChange: handleChange('precoMedio'), step: "0.01" }))),
        React.createElement(Box, { width: "25%", mr: "10px", mb: "36px" },
            React.createElement(FormGroup, null,
                React.createElement(Label, null, "Pre\u00E7o Grande"),
                React.createElement(Input, { type: "number", value: precoGrande, onChange: handleChange('precoGrande'), step: "0.01" }))),
        React.createElement(Box, { width: "25%" },
            React.createElement(FormGroup, null,
                React.createElement(Label, null, "Pre\u00E7o Individual"),
                React.createElement(Input, { type: "number", value: precoIndividual, onChange: handleChange('precoIndividual'), step: "0.01" })))));
}
export default GroupedPrices;
//# sourceMappingURL=grouped-prices.js.map