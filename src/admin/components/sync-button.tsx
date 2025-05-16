/* eslint-disable react/function-component-definition */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Box, Label, Button, Icon,
} from '@adminjs/design-system';

const SyncPricesAction = (props) => {
  const { notice } = props;

  React.useEffect(() => {
    if (notice && notice.message) {
      // Você pode usar a notificação do AdminJS, mas aqui só um alert simples
      alert(notice.message);
    }
  }, [notice]);

  // Função para voltar para a listagem de produtos
  const handleBack = () => {
    // Se quiser ir para uma rota fixa:
    // window.location.href = '/admin/resources/Produtos';
    // Ou só voltar na navegação:
    window.history.back();
  };

  return (
    <Box variant="success" padding="lg">

      <Box mt="default" mb="36px" style={{ color: '#0c4a2b', marginBottom: '3rem' }}>
        A ação foi executada com sucesso em todos os produtos selecionados.
        Verifique se os preços foram atualizados corretamente.
      </Box>
      <Button
        variant="primary"
        onClick={handleBack}
        icon="plus"
      >
        {'< Voltar para listagem'}
      </Button>
    </Box>
  );
};

export default SyncPricesAction;
