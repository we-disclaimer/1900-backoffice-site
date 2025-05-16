import React from 'react';
import { Box, Button, } from '@adminjs/design-system';
const SyncPricesAction = (props) => {
    const { notice } = props;
    React.useEffect(() => {
        if (notice && notice.message) {
            alert(notice.message);
        }
    }, [notice]);
    const handleBack = () => {
        window.history.back();
    };
    return (React.createElement(Box, { variant: "success", padding: "lg" },
        React.createElement(Box, { mt: "default", mb: "36px", style: { color: '#0c4a2b', marginBottom: '3rem' } }, "A a\u00E7\u00E3o foi executada com sucesso em todos os produtos selecionados. Verifique se os pre\u00E7os foram atualizados corretamente."),
        React.createElement(Button, { variant: "primary", onClick: handleBack, icon: "plus" }, '< Voltar para listagem')));
};
export default SyncPricesAction;
//# sourceMappingURL=sync-button.js.map