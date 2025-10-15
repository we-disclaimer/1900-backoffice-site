/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { BasePropertyProps } from 'adminjs';
import { 
  FormGroup, 
  Label, 
  Box, 
  Text, 
  Button, 
  Input,
  TextArea
} from '@adminjs/design-system';

interface Block {
  id: string;
  type: 'text' | 'heading' | 'image' | 'quote' | 'list';
  content: string;
  url?: string;
}

interface BlockBuilderProps extends BasePropertyProps {}

const BlockBuilder: React.FC<BlockBuilderProps> = ({ property, record, onChange }) => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    // Inicializar com valor atual
    const currentValue = record?.params?.[property.name] || '';
    if (currentValue) {
      try {
        const parsed = JSON.parse(currentValue);
        setBlocks(Array.isArray(parsed) ? parsed : []);
      } catch {
        // Se não é JSON, criar um bloco de texto
        setBlocks([{
          id: Date.now().toString(),
          type: 'text',
          content: currentValue
        }]);
      }
    }
  }, [record, property.name]);

  const addBlock = (type: Block['type']) => {
    const newBlock: Block = {
      id: Date.now().toString(),
      type,
      content: '',
    };
    const newBlocks = [...blocks, newBlock];
    setBlocks(newBlocks);
    updateContent(newBlocks);
  };

  const updateBlock = (id: string, updates: Partial<Block>) => {
    const newBlocks = blocks.map(block => 
      block.id === id ? { ...block, ...updates } : block
    );
    setBlocks(newBlocks);
    updateContent(newBlocks);
  };

  const deleteBlock = (id: string) => {
    const newBlocks = blocks.filter(block => block.id !== id);
    setBlocks(newBlocks);
    updateContent(newBlocks);
  };

  const moveBlock = (id: string, direction: 'up' | 'down') => {
    const index = blocks.findIndex(block => block.id === id);
    if (index === -1) return;
    
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= blocks.length) return;
    
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
    
    setBlocks(newBlocks);
    updateContent(newBlocks);
  };

  const updateContent = (newBlocks: Block[]) => {
    // Converter blocks para HTML
    const html = newBlocks.map(block => {
      switch (block.type) {
        case 'heading':
          return `<h2>${block.content}</h2>`;
        case 'text':
          return `<p>${block.content}</p>`;
        case 'quote':
          return `<blockquote>${block.content}</blockquote>`;
        case 'list':
          return `<ul><li>${block.content.split('\n').join('</li><li>')}</li></ul>`;
        case 'image':
          return `<img src="${block.url}" alt="${block.content}" style="max-width: 100%; height: auto;" />`;
        default:
          return `<p>${block.content}</p>`;
      }
    }).join('\n');

    if (onChange) {
      onChange(property.name, html);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    // Validar tamanho máximo de 2MB
    const MAX_SIZE = 2 * 1024 * 1024; // 2MB em bytes
    if (file.size > MAX_SIZE) {
      const sizeMB = (file.size / 1024 / 1024).toFixed(2);
      throw new Error(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${sizeMB}MB`);
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/admin/api/resources/Media/actions/new', {
      method: 'POST',
      body: formData,
    });
    
    const result = await response.json();
    return result.record?.params?.url || '';
  };

  const renderBlock = (block: Block) => {
    const commonStyles = {
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '12px',
      marginBottom: '8px',
      backgroundColor: 'white'
    };

    return (
      <Box key={block.id} style={commonStyles}>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <Text variant="sm" style={{ fontWeight: 'bold', color: '#666' }}>
            {block.type === 'text' && '📝 Parágrafo'}
            {block.type === 'heading' && '📰 Título'}
            {block.type === 'image' && '🖼️ Imagem'}
            {block.type === 'quote' && '💬 Citação'}
            {block.type === 'list' && '📋 Lista'}
          </Text>
          
          <Box style={{ display: 'flex', gap: '4px' }}>
            <Button
              size="sm"
              variant="light"
              onClick={() => moveBlock(block.id, 'up')}
              disabled={blocks.findIndex(b => b.id === block.id) === 0}
            >
              ↑
            </Button>
            <Button
              size="sm"
              variant="light"
              onClick={() => moveBlock(block.id, 'down')}
              disabled={blocks.findIndex(b => b.id === block.id) === blocks.length - 1}
            >
              ↓
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={() => deleteBlock(block.id)}
            >
              🗑️
            </Button>
          </Box>
        </Box>

        {block.type === 'image' ? (
          <Box>
            <Input
              placeholder="Descrição da imagem..."
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              style={{ marginBottom: '8px' }}
            />
            <Input
              type="file"
              accept="image/*"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  try {
                    const url = await uploadImage(file);
                    updateBlock(block.id, { url });
                  } catch (error) {
                    alert(error instanceof Error ? error.message : 'Erro ao fazer upload da imagem');
                  }
                }
              }}
            />
            {block.url && (
              <Box mt="sm">
                <img src={block.url} alt={block.content} style={{ maxWidth: '200px', borderRadius: '4px' }} />
              </Box>
            )}
          </Box>
        ) : block.type === 'list' ? (
          <TextArea
            placeholder="Digite cada item em uma linha..."
            value={block.content}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            rows={4}
          />
        ) : (
          <TextArea
            placeholder={
              block.type === 'heading' ? 'Digite o título...' :
              block.type === 'quote' ? 'Digite a citação...' :
              'Digite o texto...'
            }
            value={block.content}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            rows={block.type === 'heading' ? 2 : 4}
          />
        )}
      </Box>
    );
  };

  return (
    <FormGroup>
      <Label>
        {property.label || 'Conteúdo'}
        {property.isRequired && <span style={{ color: 'red' }}> *</span>}
      </Label>
      
      <Box mt="xs">
        <Text variant="sm" color="grey60" mb="sm">
          🧱 Editor em blocos - Construa seu conteúdo de forma modular
        </Text>
        
        <Box style={{ border: '1px solid #eee', borderRadius: '8px', padding: '16px', backgroundColor: '#fafafa' }}>
          {blocks.map(renderBlock)}
          
          <Box style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
            <Button size="sm" onClick={() => addBlock('text')}>+ Parágrafo</Button>
            <Button size="sm" onClick={() => addBlock('heading')}>+ Título</Button>
            <Button size="sm" onClick={() => addBlock('image')}>+ Imagem</Button>
            <Button size="sm" onClick={() => addBlock('quote')}>+ Citação</Button>
            <Button size="sm" onClick={() => addBlock('list')}>+ Lista</Button>
          </Box>
        </Box>
        
        <Box mt="sm">
          <Text variant="sm" color="grey60">
            💡 Use os botões para adicionar diferentes tipos de conteúdo. Arraste para reordenar.
          </Text>
        </Box>
      </Box>
    </FormGroup>
  );
};

export default BlockBuilder;
