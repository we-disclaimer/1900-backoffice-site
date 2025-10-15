import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Box, Text, Button, Input, TextArea } from '@adminjs/design-system';
const BlockBuilder = ({ property, record, onChange }) => {
    const [blocks, setBlocks] = useState([]);
    useEffect(() => {
        const currentValue = record?.params?.[property.name] || '';
        if (currentValue) {
            try {
                const parsed = JSON.parse(currentValue);
                setBlocks(Array.isArray(parsed) ? parsed : []);
            }
            catch {
                setBlocks([{
                        id: Date.now().toString(),
                        type: 'text',
                        content: currentValue
                    }]);
            }
        }
    }, [record, property.name]);
    const addBlock = (type) => {
        const newBlock = {
            id: Date.now().toString(),
            type,
            content: '',
        };
        const newBlocks = [...blocks, newBlock];
        setBlocks(newBlocks);
        updateContent(newBlocks);
    };
    const updateBlock = (id, updates) => {
        const newBlocks = blocks.map(block => block.id === id ? { ...block, ...updates } : block);
        setBlocks(newBlocks);
        updateContent(newBlocks);
    };
    const deleteBlock = (id) => {
        const newBlocks = blocks.filter(block => block.id !== id);
        setBlocks(newBlocks);
        updateContent(newBlocks);
    };
    const moveBlock = (id, direction) => {
        const index = blocks.findIndex(block => block.id === id);
        if (index === -1)
            return;
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= blocks.length)
            return;
        const newBlocks = [...blocks];
        [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
        setBlocks(newBlocks);
        updateContent(newBlocks);
    };
    const updateContent = (newBlocks) => {
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
    const uploadImage = async (file) => {
        const MAX_SIZE = 2 * 1024 * 1024;
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
    const renderBlock = (block) => {
        const commonStyles = {
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '12px',
            marginBottom: '8px',
            backgroundColor: 'white'
        };
        return (React.createElement(Box, { key: block.id, style: commonStyles },
            React.createElement(Box, { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' } },
                React.createElement(Text, { variant: "sm", style: { fontWeight: 'bold', color: '#666' } },
                    block.type === 'text' && '📝 Parágrafo',
                    block.type === 'heading' && '📰 Título',
                    block.type === 'image' && '🖼️ Imagem',
                    block.type === 'quote' && '💬 Citação',
                    block.type === 'list' && '📋 Lista'),
                React.createElement(Box, { style: { display: 'flex', gap: '4px' } },
                    React.createElement(Button, { size: "sm", variant: "light", onClick: () => moveBlock(block.id, 'up'), disabled: blocks.findIndex(b => b.id === block.id) === 0 }, "\u2191"),
                    React.createElement(Button, { size: "sm", variant: "light", onClick: () => moveBlock(block.id, 'down'), disabled: blocks.findIndex(b => b.id === block.id) === blocks.length - 1 }, "\u2193"),
                    React.createElement(Button, { size: "sm", variant: "danger", onClick: () => deleteBlock(block.id) }, "\uD83D\uDDD1\uFE0F"))),
            block.type === 'image' ? (React.createElement(Box, null,
                React.createElement(Input, { placeholder: "Descri\u00E7\u00E3o da imagem...", value: block.content, onChange: (e) => updateBlock(block.id, { content: e.target.value }), style: { marginBottom: '8px' } }),
                React.createElement(Input, { type: "file", accept: "image/*", onChange: async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            try {
                                const url = await uploadImage(file);
                                updateBlock(block.id, { url });
                            }
                            catch (error) {
                                alert(error instanceof Error ? error.message : 'Erro ao fazer upload da imagem');
                            }
                        }
                    } }),
                block.url && (React.createElement(Box, { mt: "sm" },
                    React.createElement("img", { src: block.url, alt: block.content, style: { maxWidth: '200px', borderRadius: '4px' } }))))) : block.type === 'list' ? (React.createElement(TextArea, { placeholder: "Digite cada item em uma linha...", value: block.content, onChange: (e) => updateBlock(block.id, { content: e.target.value }), rows: 4 })) : (React.createElement(TextArea, { placeholder: block.type === 'heading' ? 'Digite o título...' :
                    block.type === 'quote' ? 'Digite a citação...' :
                        'Digite o texto...', value: block.content, onChange: (e) => updateBlock(block.id, { content: e.target.value }), rows: block.type === 'heading' ? 2 : 4 }))));
    };
    return (React.createElement(FormGroup, null,
        React.createElement(Label, null,
            property.label || 'Conteúdo',
            property.isRequired && React.createElement("span", { style: { color: 'red' } }, " *")),
        React.createElement(Box, { mt: "xs" },
            React.createElement(Text, { variant: "sm", color: "grey60", mb: "sm" }, "\uD83E\uDDF1 Editor em blocos - Construa seu conte\u00FAdo de forma modular"),
            React.createElement(Box, { style: { border: '1px solid #eee', borderRadius: '8px', padding: '16px', backgroundColor: '#fafafa' } },
                blocks.map(renderBlock),
                React.createElement(Box, { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' } },
                    React.createElement(Button, { size: "sm", onClick: () => addBlock('text') }, "+ Par\u00E1grafo"),
                    React.createElement(Button, { size: "sm", onClick: () => addBlock('heading') }, "+ T\u00EDtulo"),
                    React.createElement(Button, { size: "sm", onClick: () => addBlock('image') }, "+ Imagem"),
                    React.createElement(Button, { size: "sm", onClick: () => addBlock('quote') }, "+ Cita\u00E7\u00E3o"),
                    React.createElement(Button, { size: "sm", onClick: () => addBlock('list') }, "+ Lista"))),
            React.createElement(Box, { mt: "sm" },
                React.createElement(Text, { variant: "sm", color: "grey60" }, "\uD83D\uDCA1 Use os bot\u00F5es para adicionar diferentes tipos de conte\u00FAdo. Arraste para reordenar.")))));
};
export default BlockBuilder;
//# sourceMappingURL=block-builder.js.map