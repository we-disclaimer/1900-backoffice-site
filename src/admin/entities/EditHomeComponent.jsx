import React, { useEffect, useState } from 'react';
import {
  useRecord, Box, Text, Input, Button,
} from '@adminjs/design-system';

function EditHomeComponent({
  record, onSave, onChange, resources,
}) {
  const [title, setTitle] = useState(record.params.title || '');
  const [subtitle, setSubtitle] = useState(record.params.subtitle || '');
  const [content, setContent] = useState(record.params.content || '');

  const handleSave = () => {
    // Salve os dados aqui usando sua lógica personalizada
    onSave({
      ...record.params,
      title,
      subtitle,
      content,
    });
  };

  return (
    <Box>
      <Text variant="h2">Editar Página Home</Text>
      <Input
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        label="Subtítulo"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <Input
        label="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={handleSave}>Salvar</Button>
    </Box>
  );
}
