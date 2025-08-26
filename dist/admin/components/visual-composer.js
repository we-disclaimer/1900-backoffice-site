import React, { useState, useCallback } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { useSortable, } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
const ColumnBlockManager = ({ columnIndex, blocks, onUpdateBlocks }) => {
    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }));
    const generateId = () => Math.random().toString(36).substr(2, 9);
    const addBlockToColumn = (type) => {
        const newBlock = {
            id: generateId(),
            type,
            content: '',
            attributes: {}
        };
        const updatedBlocks = [...blocks, newBlock];
        onUpdateBlocks(columnIndex, updatedBlocks);
    };
    const updateColumnBlock = (id, content, attributes) => {
        const updatedBlocks = blocks.map(block => block.id === id
            ? { ...block, content, attributes: { ...block.attributes, ...attributes } }
            : block);
        onUpdateBlocks(columnIndex, updatedBlocks);
    };
    const deleteColumnBlock = (id) => {
        const updatedBlocks = blocks.filter(block => block.id !== id);
        onUpdateBlocks(columnIndex, updatedBlocks);
    };
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = blocks.findIndex(block => block.id === active.id);
            const newIndex = blocks.findIndex(block => block.id === over?.id);
            const updatedBlocks = arrayMove(blocks, oldIndex, newIndex);
            onUpdateBlocks(columnIndex, updatedBlocks);
        }
    };
    return (React.createElement("div", { style: { height: '100%' } },
        React.createElement("div", { style: {
                padding: '8px',
                backgroundColor: '#f1f3f4',
                borderRadius: '4px',
                marginBottom: '8px',
                border: '1px solid #dadce0'
            } },
            React.createElement("div", { style: { fontSize: '10px', fontWeight: '600', marginBottom: '6px', color: '#5f6368' } },
                "Adicionar \u00E0 Coluna ",
                columnIndex + 1,
                ":"),
            React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', gap: '4px' } },
                React.createElement("button", { onClick: () => addBlockToColumn('paragraph'), style: miniButtonStyle }, "\uD83D\uDCDD Texto"),
                React.createElement("button", { onClick: () => addBlockToColumn('heading2'), style: miniButtonStyle }, "H2"),
                React.createElement("button", { onClick: () => addBlockToColumn('image'), style: miniButtonStyle }, "\uD83D\uDDBC\uFE0F"),
                React.createElement("button", { onClick: () => addBlockToColumn('youtube'), style: miniButtonStyle }, "\uD83D\uDCFA"),
                React.createElement("button", { onClick: () => addBlockToColumn('link'), style: miniButtonStyle }, "\uD83D\uDD17"))),
        React.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
            React.createElement(SortableContext, { items: blocks.map(b => b.id), strategy: verticalListSortingStrategy },
                React.createElement("div", { style: { minHeight: '100px' } }, blocks.length === 0 ? (React.createElement("div", { style: {
                        textAlign: 'center',
                        padding: '20px',
                        color: '#9aa0a6',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '4px',
                        border: '1px dashed #dadce0',
                        fontSize: '11px'
                    } }, "Adicione blocos nesta coluna")) : (blocks.map((block) => (React.createElement(SortableBlock, { key: block.id, block: block, onUpdate: updateColumnBlock, onDelete: deleteColumnBlock })))))))));
};
const SortableBlock = ({ block, onUpdate, onDelete }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging, } = useSortable({ id: block.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };
    const handleContentChange = (content, attrs) => {
        onUpdate(block.id, content, attrs);
    };
    const renderBlockContent = () => {
        switch (block.type) {
            case 'paragraph':
                return (React.createElement("div", { className: "block-content" },
                    React.createElement("div", { style: {
                            display: 'flex',
                            gap: '4px',
                            marginBottom: '8px',
                            padding: '4px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            border: '1px solid #e0e0e0'
                        } },
                        React.createElement("button", { onMouseDown: (e) => {
                                e.preventDefault();
                                document.execCommand('bold');
                            }, style: toolbarButtonStyle, title: "Negrito" },
                            React.createElement("strong", null, "B")),
                        React.createElement("button", { onMouseDown: (e) => {
                                e.preventDefault();
                                document.execCommand('italic');
                            }, style: toolbarButtonStyle, title: "It\u00E1lico" },
                            React.createElement("em", null, "I")),
                        React.createElement("button", { onMouseDown: (e) => {
                                e.preventDefault();
                                document.execCommand('underline');
                            }, style: toolbarButtonStyle, title: "Sublinhado" },
                            React.createElement("u", null, "U")),
                        React.createElement("button", { onMouseDown: (e) => {
                                e.preventDefault();
                                const url = prompt('Digite a URL do link:');
                                if (url) {
                                    document.execCommand('createLink', false, url);
                                }
                            }, style: toolbarButtonStyle, title: "Inserir Link" }, "\uD83D\uDD17")),
                    React.createElement("div", { contentEditable: true, suppressContentEditableWarning: true, onBlur: (e) => handleContentChange(e.target.innerHTML), dangerouslySetInnerHTML: { __html: block.content || 'Digite seu texto aqui...' }, style: {
                            minHeight: '50px',
                            padding: '12px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            outline: 'none',
                            fontSize: '16px',
                            lineHeight: '1.6'
                        } })));
            case 'heading1':
            case 'heading2':
            case 'heading3':
            case 'heading4':
            case 'heading5':
            case 'heading6':
                const HeadingTag = block.type;
                return (React.createElement("div", { className: "block-content" },
                    React.createElement(HeadingTag, { contentEditable: true, suppressContentEditableWarning: true, onBlur: (e) => handleContentChange(e.target.innerHTML), dangerouslySetInnerHTML: { __html: block.content || `Título ${block.type.slice(-1)}` }, style: {
                            padding: '8px 12px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            outline: 'none',
                            fontWeight: 'bold',
                            margin: 0
                        } })));
            case 'image':
                return (React.createElement("div", { className: "block-content" },
                    React.createElement("div", { style: { border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' } },
                        block.attributes?.src ? (React.createElement("img", { src: block.attributes.src, alt: block.attributes?.alt || '', style: { maxWidth: '100%', height: 'auto' } })) : (React.createElement("div", { style: { textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5' } },
                            React.createElement("p", null, "Nenhuma imagem selecionada"))),
                        React.createElement("div", { style: { marginTop: '10px' } },
                            React.createElement("input", { type: "file", accept: "image/*", onChange: (e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onload = () => {
                                            handleContentChange(block.content, {
                                                ...block.attributes,
                                                src: reader.result
                                            });
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }, style: { marginBottom: '8px' } }),
                            React.createElement("input", { type: "text", placeholder: "Texto alternativo", value: block.attributes?.alt || '', onChange: (e) => handleContentChange(block.content, {
                                    ...block.attributes,
                                    alt: e.target.value
                                }), style: {
                                    width: '100%',
                                    padding: '8px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px'
                                } })))));
            case 'youtube':
                return (React.createElement("div", { className: "block-content" },
                    React.createElement("div", { style: { border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' } },
                        React.createElement("input", { type: "text", placeholder: "ID do v\u00EDdeo do YouTube (ex: dQw4w9WgXcQ)", value: block.attributes?.videoId || '', onChange: (e) => handleContentChange(block.content, {
                                ...block.attributes,
                                videoId: e.target.value
                            }), style: {
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                marginBottom: '10px'
                            } }),
                        block.attributes?.videoId && (React.createElement("div", { style: { position: 'relative', paddingBottom: '56.25%', height: 0 } },
                            React.createElement("iframe", { src: `https://www.youtube.com/embed/${block.attributes.videoId}`, style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 'none'
                                }, allowFullScreen: true }))))));
            case 'columns':
                const handleColumnBlocksUpdate = (columnIndex, columnBlocks) => {
                    const updatedColumns = [...(block.attributes?.columns || [])];
                    updatedColumns[columnIndex] = columnBlocks;
                    handleContentChange(block.content, {
                        ...block.attributes,
                        columns: updatedColumns
                    });
                };
                return (React.createElement("div", { className: "block-content" },
                    React.createElement("div", { style: { border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' } },
                        React.createElement("div", { style: { marginBottom: '10px' } },
                            React.createElement("label", { style: { fontSize: '12px', fontWeight: '500', marginBottom: '4px', display: 'block' } }, "N\u00FAmero de colunas:"),
                            React.createElement("select", { value: block.attributes?.columnCount || 2, onChange: (e) => {
                                    const columnCount = parseInt(e.target.value);
                                    const columns = Array(columnCount).fill(null).map(() => []);
                                    handleContentChange(block.content, {
                                        ...block.attributes,
                                        columnCount,
                                        columns
                                    });
                                }, style: {
                                    padding: '4px 8px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '12px'
                                } },
                                React.createElement("option", { value: 2 }, "2 Colunas"),
                                React.createElement("option", { value: 3 }, "3 Colunas"),
                                React.createElement("option", { value: 4 }, "4 Colunas"))),
                        React.createElement("div", { style: {
                                display: 'grid',
                                gridTemplateColumns: `repeat(${block.attributes?.columnCount || 2}, 1fr)`,
                                gap: '16px',
                                minHeight: '200px'
                            } }, Array(block.attributes?.columnCount || 2).fill(null).map((_, colIndex) => (React.createElement("div", { key: colIndex, style: {
                                border: '2px solid #e9ecef',
                                borderRadius: '8px',
                                padding: '8px',
                                backgroundColor: '#f8f9fa',
                                minHeight: '180px'
                            } },
                            React.createElement(ColumnBlockManager, { columnIndex: colIndex, blocks: block.attributes?.columns?.[colIndex] || [], onUpdateBlocks: handleColumnBlocksUpdate }))))))));
            case 'link':
                return (React.createElement("div", { className: "block-content" },
                    React.createElement("div", { style: { border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' } },
                        React.createElement("input", { type: "text", placeholder: "Texto do link", value: block.content, onChange: (e) => handleContentChange(e.target.value, block.attributes), style: {
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                marginBottom: '8px'
                            } }),
                        React.createElement("input", { type: "url", placeholder: "URL do link", value: block.attributes?.href || '', onChange: (e) => handleContentChange(block.content, {
                                ...block.attributes,
                                href: e.target.value
                            }), style: {
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ddd',
                                borderRadius: '4px'
                            } }),
                        block.content && block.attributes?.href && (React.createElement("div", { style: { marginTop: '10px' } },
                            React.createElement("a", { href: block.attributes.href, target: "_blank", rel: "noopener noreferrer" }, block.content))))));
            default:
                return React.createElement("div", null, "Tipo de bloco n\u00E3o suportado");
        }
    };
    return (React.createElement("div", { ref: setNodeRef, style: style, className: "sortable-block" },
        React.createElement("div", { style: {
                border: '2px solid #f0f0f0',
                borderRadius: '8px',
                margin: '8px 0',
                backgroundColor: 'white',
                position: 'relative'
            } },
            React.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    backgroundColor: '#f8f9fa',
                    borderBottom: '1px solid #e0e0e0',
                    borderRadius: '8px 8px 0 0'
                } },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                    React.createElement("div", { ...attributes, ...listeners, style: {
                            cursor: 'grab',
                            padding: '4px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            borderRadius: '4px',
                            fontSize: '12px'
                        } }, "\u22EE\u22EE"),
                    React.createElement("span", { style: { fontSize: '12px', color: '#6c757d', fontWeight: '500' } }, block.type.toUpperCase())),
                React.createElement("button", { onClick: () => onDelete(block.id), style: {
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        fontSize: '12px',
                        cursor: 'pointer'
                    } }, "Excluir")),
            React.createElement("div", { style: { padding: '12px' } }, renderBlockContent()))));
};
const VisualComposer = ({ record, property, onChange }) => {
    const [blocks, setBlocks] = useState(() => {
        try {
            const value = record?.params?.[property.name] || '';
            if (value && typeof value === 'string' && value.startsWith('[')) {
                return JSON.parse(value);
            }
            if (value) {
                return [{
                        id: 'initial',
                        type: 'paragraph',
                        content: value
                    }];
            }
            return [];
        }
        catch {
            return [];
        }
    });
    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }));
    const generateId = () => Math.random().toString(36).substr(2, 9);
    const addBlock = (type) => {
        const newBlock = {
            id: generateId(),
            type,
            content: '',
            attributes: type === 'columns' ? { columnCount: 2, columns: [[], []] } : {}
        };
        const updatedBlocks = [...blocks, newBlock];
        setBlocks(updatedBlocks);
        updateValue(updatedBlocks);
    };
    const updateBlock = (id, content, attributes) => {
        const updatedBlocks = blocks.map(block => block.id === id
            ? { ...block, content, attributes: { ...block.attributes, ...attributes } }
            : block);
        setBlocks(updatedBlocks);
        updateValue(updatedBlocks);
    };
    const deleteBlock = (id) => {
        const updatedBlocks = blocks.filter(block => block.id !== id);
        setBlocks(updatedBlocks);
        updateValue(updatedBlocks);
    };
    const updateValue = useCallback((updatedBlocks) => {
        const html = blocksToHtml(updatedBlocks);
        onChange(property.name, html);
        console.log('🔄 Conteúdo atualizado localmente (não salvo no banco ainda)');
    }, [property.name, onChange]);
    const blocksToHtml = (blocks) => {
        return blocks.map(block => {
            switch (block.type) {
                case 'paragraph':
                    return `<p>${block.content}</p>`;
                case 'heading1':
                    return `<h1>${block.content}</h1>`;
                case 'heading2':
                    return `<h2>${block.content}</h2>`;
                case 'heading3':
                    return `<h3>${block.content}</h3>`;
                case 'heading4':
                    return `<h4>${block.content}</h4>`;
                case 'heading5':
                    return `<h5>${block.content}</h5>`;
                case 'heading6':
                    return `<h6>${block.content}</h6>`;
                case 'image':
                    return `<img src="${block.attributes?.src || ''}" alt="${block.attributes?.alt || ''}" />`;
                case 'youtube':
                    return `<iframe src="https://www.youtube.com/embed/${block.attributes?.videoId}" frameborder="0" allowfullscreen></iframe>`;
                case 'columns':
                    const columnHtml = block.attributes?.columns?.map(columnBlocks => {
                        const columnContent = blocksToHtml(columnBlocks || []);
                        return `<div class="column">${columnContent}</div>`;
                    }).join('') || '';
                    return `<div class="columns" style="display: grid; grid-template-columns: repeat(${block.attributes?.columnCount || 2}, 1fr); gap: 16px;">${columnHtml}</div>`;
                case 'link':
                    return `<a href="${block.attributes?.href || ''}">${block.content}</a>`;
                default:
                    return '';
            }
        }).join('\n');
    };
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = blocks.findIndex(block => block.id === active.id);
            const newIndex = blocks.findIndex(block => block.id === over?.id);
            const updatedBlocks = arrayMove(blocks, oldIndex, newIndex);
            setBlocks(updatedBlocks);
            updateValue(updatedBlocks);
        }
    };
    return (React.createElement("div", { style: { width: '100%' } },
        React.createElement("div", { style: {
                padding: '8px 16px',
                backgroundColor: '#d1ecf1',
                border: '1px solid #bee5eb',
                borderRadius: '4px',
                marginBottom: '16px',
                fontSize: '12px',
                color: '#0c5460',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            } },
            React.createElement("span", null, "\uD83D\uDCA1"),
            React.createElement("span", null, "Fa\u00E7a suas edi\u00E7\u00F5es normalmente. Clique em \"Salvar\" no final da p\u00E1gina para persistir as mudan\u00E7as.")),
        React.createElement("div", { style: {
                padding: '16px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                marginBottom: '16px',
                border: '1px solid #e0e0e0'
            } },
            React.createElement("h4", { style: { margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' } }, "\uD83C\uDFA8 Editor Visual - Adicionar Blocos"),
            React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', gap: '8px' } },
                React.createElement("button", { onClick: () => addBlock('paragraph'), style: buttonStyle }, "\uD83D\uDCDD Par\u00E1grafo"),
                React.createElement("button", { onClick: () => addBlock('heading1'), style: buttonStyle }, "H1 T\u00EDtulo 1"),
                React.createElement("button", { onClick: () => addBlock('heading2'), style: buttonStyle }, "H2 T\u00EDtulo 2"),
                React.createElement("button", { onClick: () => addBlock('heading3'), style: buttonStyle }, "H3 T\u00EDtulo 3"),
                React.createElement("button", { onClick: () => addBlock('image'), style: buttonStyle }, "\uD83D\uDDBC\uFE0F Imagem"),
                React.createElement("button", { onClick: () => addBlock('youtube'), style: buttonStyle }, "\uD83D\uDCFA YouTube"),
                React.createElement("button", { onClick: () => addBlock('columns'), style: buttonStyle }, "\uD83D\uDCD0 Colunas"),
                React.createElement("button", { onClick: () => addBlock('link'), style: buttonStyle }, "\uD83D\uDD17 Link"))),
        React.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
            React.createElement(SortableContext, { items: blocks.map(b => b.id), strategy: verticalListSortingStrategy },
                React.createElement("div", { style: { minHeight: '200px' } }, blocks.length === 0 ? (React.createElement("div", { style: {
                        textAlign: 'center',
                        padding: '40px',
                        color: '#6c757d',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '2px dashed #dee2e6'
                    } },
                    React.createElement("p", null, "Adicione blocos para come\u00E7ar a criar seu conte\u00FAdo"),
                    React.createElement("p", { style: { fontSize: '12px' } }, "Arraste os blocos para reordenar"))) : (blocks.map((block) => (React.createElement(SortableBlock, { key: block.id, block: block, onUpdate: updateBlock, onDelete: deleteBlock })))))))));
};
const buttonStyle = {
    padding: '8px 12px',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '500',
    transition: 'all 0.2s'
};
const toolbarButtonStyle = {
    padding: '4px 8px',
    border: '1px solid #dee2e6',
    borderRadius: '3px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '500',
    minWidth: '28px',
    transition: 'all 0.2s'
};
const miniButtonStyle = {
    padding: '4px 6px',
    border: '1px solid #d1d5db',
    borderRadius: '3px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '10px',
    fontWeight: '500',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap'
};
export default VisualComposer;
//# sourceMappingURL=visual-composer.js.map