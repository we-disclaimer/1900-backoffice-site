import React, { useState, useCallback } from 'react';
import { EditPropertyProps } from 'adminjs';
import { 
  DndContext, 
  closestCenter, 
  KeyboardSensor, 
  PointerSensor, 
  useSensor, 
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Tipos de blocos disponíveis
type BlockType = 
  | 'paragraph' 
  | 'heading1' 
  | 'heading2' 
  | 'heading3' 
  | 'heading4' 
  | 'heading5' 
  | 'heading6'
  | 'image' 
  | 'video'
  | 'youtube'
  | 'columns'
  | 'link';

interface Block {
  id: string;
  type: BlockType;
  content: string;
  attributes?: {
    href?: string;
    alt?: string;
    src?: string;
    videoId?: string;
    columnCount?: number;
    columns?: Block[][]; // Agora cada coluna contém um array de blocos
  };
}

interface SortableBlockProps {
  block: Block;
  onUpdate: (id: string, content: string, attributes?: any) => void;
  onDelete: (id: string) => void;
}

interface ColumnBlockManagerProps {
  columnIndex: number;
  blocks: Block[];
  onUpdateBlocks: (columnIndex: number, blocks: Block[]) => void;
}

const createBlockId = () => Math.random().toString(36).substr(2, 9);

const normalizeBlock = (rawBlock: any): Block => {
  const normalized: Block = {
    id: rawBlock?.id || createBlockId(),
    type: (rawBlock?.type as BlockType) || 'paragraph',
    content: typeof rawBlock?.content === 'string' ? rawBlock.content : '',
    attributes: rawBlock?.attributes ? { ...rawBlock.attributes } : undefined,
  };

  if (normalized.attributes?.columns) {
    normalized.attributes.columns = normalized.attributes.columns.map((column: any) => {
      if (!Array.isArray(column)) {
        return [];
      }
      return column.map((childBlock: any) => normalizeBlock(childBlock));
    });
  }

  return normalized;
};

const convertHtmlToBlocks = (value?: string | null): Block[] => {
  if (!value) {
    return [];
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return [];
  }

  if (trimmedValue.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmedValue);
      if (Array.isArray(parsed)) {
        return parsed.map((item) => normalizeBlock(item));
      }
    } catch (error) {
      console.warn('VisualComposer: falha ao interpretar JSON salvo anteriormente.', error);
    }
  }

  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') {
    return [{
      id: createBlockId(),
      type: 'paragraph',
      content: value,
    }];
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(value, 'text/html');

  const parseNodes = (nodes: ChildNode[]): Block[] => {
    const parsedBlocks: Block[] = [];

    nodes.forEach((node) => {
      const result = parseNode(node);
      if (!result) {
        return;
      }

      if (Array.isArray(result)) {
        parsedBlocks.push(...result);
      } else {
        parsedBlocks.push(result);
      }
    });

    return parsedBlocks;
  };

  const parseNode = (node: ChildNode): Block | Block[] | null => {
    if (node.nodeType === Node.TEXT_NODE) {
      const textContent = node.textContent?.trim();
      if (textContent) {
        return {
          id: createBlockId(),
          type: 'paragraph',
          content: textContent,
        };
      }
      return null;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const element = node as HTMLElement;
    const tag = element.tagName.toLowerCase();

    switch (tag) {
      case 'p':
        return {
          id: createBlockId(),
          type: 'paragraph',
          content: element.innerHTML || '',
        };
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return {
          id: createBlockId(),
          type: `heading${tag.slice(-1)}` as BlockType,
          content: element.innerHTML || '',
        };
      case 'img':
        return {
          id: createBlockId(),
          type: 'image',
          content: '',
          attributes: {
            src: element.getAttribute('src') || '',
            alt: element.getAttribute('alt') || '',
          },
        };
      case 'iframe': {
        const src = element.getAttribute('src') || '';
        const youtubeMatch = src.match(/youtube\.com\/embed\/([^?]+)/);
        if (youtubeMatch) {
          return {
            id: createBlockId(),
            type: 'youtube',
            content: '',
            attributes: {
              videoId: youtubeMatch[1],
            },
          };
        }
        return {
          id: createBlockId(),
          type: 'paragraph',
          content: element.outerHTML,
        };
      }
      case 'a':
        return {
          id: createBlockId(),
          type: 'link',
          content: element.innerHTML || '',
          attributes: {
            href: element.getAttribute('href') || '',
          },
        };
      case 'div': {
        const isColumnsContainer = element.classList.contains('columns');
        if (isColumnsContainer) {
          const children = Array.from(element.children);
          const columnCountFromStyle = element.getAttribute('style')?.match(/repeat\((\d+)/i);
          const columnCount = columnCountFromStyle ? parseInt(columnCountFromStyle[1], 10) : children.length || 2;
          const columns = children.map((child) => parseNodes(Array.from(child.childNodes)));
          return {
            id: createBlockId(),
            type: 'columns',
            content: '',
            attributes: {
              columnCount,
              columns,
            },
          };
        }

        // Para DIVs genéricas, aproveitamos os filhos
        const childBlocks = parseNodes(Array.from(element.childNodes));
        if (childBlocks.length) {
          return childBlocks;
        }

        return {
          id: createBlockId(),
          type: 'paragraph',
          content: element.innerHTML || '',
        };
      }
      default:
        return {
          id: createBlockId(),
          type: 'paragraph',
          content: element.innerHTML || '',
        };
    }
  };

  return parseNodes(Array.from(doc.body.childNodes));
};

// Componente para gerenciar blocos dentro de uma coluna
const ColumnBlockManager: React.FC<ColumnBlockManagerProps> = ({ columnIndex, blocks, onUpdateBlocks }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addBlockToColumn = (type: BlockType) => {
    const newBlock: Block = {
      id: createBlockId(),
      type,
      content: '',
      attributes: {}
    };
    
    const updatedBlocks = [...blocks, newBlock];
    onUpdateBlocks(columnIndex, updatedBlocks);
  };

  const updateColumnBlock = (id: string, content: string, attributes?: any) => {
    const updatedBlocks = blocks.map(block =>
      block.id === id
        ? { ...block, content, attributes: { ...block.attributes, ...attributes } }
        : block
    );
    onUpdateBlocks(columnIndex, updatedBlocks);
  };

  const deleteColumnBlock = (id: string) => {
    const updatedBlocks = blocks.filter(block => block.id !== id);
    onUpdateBlocks(columnIndex, updatedBlocks);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = blocks.findIndex(block => block.id === active.id);
      const newIndex = blocks.findIndex(block => block.id === over?.id);

      const updatedBlocks = arrayMove(blocks, oldIndex, newIndex);
      onUpdateBlocks(columnIndex, updatedBlocks);
    }
  };

  return (
    <div style={{ height: '100%' }}>
      {/* Toolbar mini para adicionar blocos na coluna */}
      <div style={{
        padding: '8px',
        backgroundColor: '#f1f3f4',
        borderRadius: '4px',
        marginBottom: '8px',
        border: '1px solid #dadce0'
      }}>
        <div style={{ fontSize: '10px', fontWeight: '600', marginBottom: '6px', color: '#5f6368' }}>
          Adicionar à Coluna {columnIndex + 1}:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          <button onClick={() => addBlockToColumn('paragraph')} style={miniButtonStyle}>
            📝 Texto
          </button>
          <button onClick={() => addBlockToColumn('heading2')} style={miniButtonStyle}>
            H2
          </button>
          <button onClick={() => addBlockToColumn('image')} style={miniButtonStyle}>
            🖼️
          </button>
          <button onClick={() => addBlockToColumn('youtube')} style={miniButtonStyle}>
            📺
          </button>
          <button onClick={() => addBlockToColumn('link')} style={miniButtonStyle}>
            🔗
          </button>
        </div>
      </div>

      {/* Lista de blocos na coluna */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={blocks.map(b => b.id)} strategy={verticalListSortingStrategy}>
          <div style={{ minHeight: '100px' }}>
            {blocks.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '20px',
                color: '#9aa0a6',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                border: '1px dashed #dadce0',
                fontSize: '11px'
              }}>
                Adicione blocos nesta coluna
              </div>
            ) : (
              blocks.map((block) => (
                <SortableBlock
                  key={block.id}
                  block={block}
                  onUpdate={updateColumnBlock}
                  onDelete={deleteColumnBlock}
                />
              ))
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

// Componente de bloco arrastável
const SortableBlock: React.FC<SortableBlockProps> = ({ block, onUpdate, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleContentChange = (content: string, attrs?: any) => {
    onUpdate(block.id, content, attrs);
  };

  const renderBlockContent = () => {
    switch (block.type) {
      case 'paragraph':
        return (
          <div className="block-content">
            {/* Toolbar de formatação */}
            <div style={{
              display: 'flex',
              gap: '4px',
              marginBottom: '8px',
              padding: '4px',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              border: '1px solid #e0e0e0'
            }}>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  document.execCommand('bold');
                }}
                style={toolbarButtonStyle}
                title="Negrito"
              >
                <strong>B</strong>
              </button>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  document.execCommand('italic');
                }}
                style={toolbarButtonStyle}
                title="Itálico"
              >
                <em>I</em>
              </button>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  document.execCommand('underline');
                }}
                style={toolbarButtonStyle}
                title="Sublinhado"
              >
                <u>U</u>
              </button>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  const url = prompt('Digite a URL do link:');
                  if (url) {
                    document.execCommand('createLink', false, url);
                  }
                }}
                style={toolbarButtonStyle}
                title="Inserir Link"
              >
                🔗
              </button>
            </div>
            <div
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => handleContentChange(e.target.innerHTML)}
              dangerouslySetInnerHTML={{ __html: block.content || 'Digite seu texto aqui...' }}
              style={{
                minHeight: '50px',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                outline: 'none',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            />
          </div>
        );
      
      case 'heading1':
      case 'heading2':
      case 'heading3':
      case 'heading4':
      case 'heading5':
      case 'heading6':
        const HeadingTag = block.type as keyof JSX.IntrinsicElements;
        return (
          <div className="block-content">
            <HeadingTag
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => handleContentChange(e.target.innerHTML)}
              dangerouslySetInnerHTML={{ __html: block.content || `Título ${block.type.slice(-1)}` }}
              style={{
                padding: '8px 12px',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                outline: 'none',
                fontWeight: 'bold',
                margin: 0
              }}
            />
          </div>
        );

      case 'image':
        return (
          <div className="block-content">
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' }}>
              {block.attributes?.src ? (
                <img 
                  src={block.attributes.src} 
                  alt={block.attributes?.alt || ''} 
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ) : (
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5' }}>
                  <p>Nenhuma imagem selecionada</p>
                </div>
              )}
              <div style={{ marginTop: '10px' }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        handleContentChange(block.content, {
                          ...block.attributes,
                          src: reader.result as string
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  style={{ marginBottom: '8px' }}
                />
                <input
                  type="text"
                  placeholder="Texto alternativo"
                  value={block.attributes?.alt || ''}
                  onChange={(e) => handleContentChange(block.content, {
                    ...block.attributes,
                    alt: e.target.value
                  })}
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px' 
                  }}
                />
              </div>
            </div>
          </div>
        );

      case 'youtube':
        return (
          <div className="block-content">
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' }}>
              <input
                type="text"
                placeholder="ID do vídeo do YouTube (ex: dQw4w9WgXcQ)"
                value={block.attributes?.videoId || ''}
                onChange={(e) => handleContentChange(block.content, {
                  ...block.attributes,
                  videoId: e.target.value
                })}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px',
                  marginBottom: '10px'
                }}
              />
              {block.attributes?.videoId && (
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${block.attributes.videoId}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'columns':
        const handleColumnBlocksUpdate = (columnIndex: number, columnBlocks: Block[]) => {
          const updatedColumns = [...(block.attributes?.columns || [])];
          updatedColumns[columnIndex] = columnBlocks;
          handleContentChange(block.content, {
            ...block.attributes,
            columns: updatedColumns
          });
        };

        return (
          <div className="block-content">
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ fontSize: '12px', fontWeight: '500', marginBottom: '4px', display: 'block' }}>
                  Número de colunas:
                </label>
                <select
                  value={block.attributes?.columnCount || 2}
                  onChange={(e) => {
                    const columnCount = parseInt(e.target.value);
                    // Inicializa colunas como arrays de blocos vazios
                    const columns = Array(columnCount).fill(null).map(() => []);
                    handleContentChange(block.content, {
                      ...block.attributes,
                      columnCount,
                      columns
                    });
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                >
                  <option value={2}>2 Colunas</option>
                  <option value={3}>3 Colunas</option>
                  <option value={4}>4 Colunas</option>
                </select>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: `repeat(${block.attributes?.columnCount || 2}, 1fr)`,
                gap: '16px',
                minHeight: '200px'
              }}>
                {Array(block.attributes?.columnCount || 2).fill(null).map((_, colIndex) => (
                  <div 
                    key={colIndex}
                    style={{ 
                      border: '2px solid #e9ecef', 
                      borderRadius: '8px', 
                      padding: '8px',
                      backgroundColor: '#f8f9fa',
                      minHeight: '180px'
                    }}
                  >
                    <ColumnBlockManager
                      columnIndex={colIndex}
                      blocks={block.attributes?.columns?.[colIndex] || []}
                      onUpdateBlocks={handleColumnBlocksUpdate}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'link':
        return (
          <div className="block-content">
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' }}>
              <input
                type="text"
                placeholder="Texto do link"
                value={block.content}
                onChange={(e) => handleContentChange(e.target.value, block.attributes)}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px',
                  marginBottom: '8px'
                }}
              />
              <input
                type="url"
                placeholder="URL do link"
                value={block.attributes?.href || ''}
                onChange={(e) => handleContentChange(block.content, {
                  ...block.attributes,
                  href: e.target.value
                })}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px' 
                }}
              />
              {block.content && block.attributes?.href && (
                <div style={{ marginTop: '10px' }}>
                  <a href={block.attributes.href} target="_blank" rel="noopener noreferrer">
                    {block.content}
                  </a>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return <div>Tipo de bloco não suportado</div>;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="sortable-block"
    >
      <div style={{ 
        border: '2px solid #f0f0f0', 
        borderRadius: '8px', 
        margin: '8px 0',
        backgroundColor: 'white',
        position: 'relative'
      }}>
        {/* Barra de controle */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 12px',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #e0e0e0',
          borderRadius: '8px 8px 0 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              {...attributes}
              {...listeners}
              style={{
                cursor: 'grab',
                padding: '4px',
                backgroundColor: '#6c757d',
                color: 'white',
                borderRadius: '4px',
                fontSize: '12px'
              }}
            >
              ⋮⋮
            </div>
            <span style={{ fontSize: '12px', color: '#6c757d', fontWeight: '500' }}>
              {block.type.toUpperCase()}
            </span>
          </div>
          <button
            onClick={() => onDelete(block.id)}
            style={{
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            Excluir
          </button>
        </div>
        
        {/* Conteúdo do bloco */}
        <div style={{ padding: '12px' }}>
          {renderBlockContent()}
        </div>
      </div>
    </div>
  );
};

// Componente principal do editor
const VisualComposer: React.FC<EditPropertyProps> = ({ record, property, onChange }) => {
  const [blocks, setBlocks] = useState<Block[]>(() => convertHtmlToBlocks(record?.params?.[property.name] as string | undefined));

  // Removido: não precisamos mais de debounce ou indicador de salvamento

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addBlock = (type: BlockType) => {
    const newBlock: Block = {
      id: createBlockId(),
      type,
      content: '',
      attributes: type === 'columns' ? { columnCount: 2, columns: [[], []] } : {}
    };
    
    const updatedBlocks = [...blocks, newBlock];
    setBlocks(updatedBlocks);
    updateValue(updatedBlocks);
  };

  const updateBlock = (id: string, content: string, attributes?: any) => {
    const updatedBlocks = blocks.map(block =>
      block.id === id
        ? { ...block, content, attributes: { ...block.attributes, ...attributes } }
        : block
    );
    setBlocks(updatedBlocks);
    updateValue(updatedBlocks);
  };

  const deleteBlock = (id: string) => {
    const updatedBlocks = blocks.filter(block => block.id !== id);
    setBlocks(updatedBlocks);
    updateValue(updatedBlocks);
  };

  const updateValue = useCallback((updatedBlocks: Block[]) => {
    // Apenas converte e atualiza o valor imediatamente, sem debounce
    // O AdminJS não irá salvar automaticamente, apenas quando o usuário clicar em "Salvar"
    const html = blocksToHtml(updatedBlocks);
    onChange(property.name, html);
    console.log('🔄 Conteúdo atualizado localmente (não salvo no banco ainda)');
  }, [property.name, onChange]);

  // Removido: cleanup do timer não é mais necessário

  const blocksToHtml = (blocks: Block[]): string => {
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = blocks.findIndex(block => block.id === active.id);
      const newIndex = blocks.findIndex(block => block.id === over?.id);

      const updatedBlocks = arrayMove(blocks, oldIndex, newIndex);
      setBlocks(updatedBlocks);
      updateValue(updatedBlocks);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Aviso sobre salvamento manual */}
      <div style={{
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
      }}>
        <span>💡</span>
        <span>Faça suas edições normalmente. Clique em "Salvar" no final da página para persistir as mudanças.</span>
      </div>

      {/* Toolbar de adicionar blocos */}
      <div style={{
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '16px',
        border: '1px solid #e0e0e0'
      }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
          🎨 Editor Visual - Adicionar Blocos
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <button onClick={() => addBlock('paragraph')} style={buttonStyle}>
            📝 Parágrafo
          </button>
          <button onClick={() => addBlock('heading1')} style={buttonStyle}>
            H1 Título 1
          </button>
          <button onClick={() => addBlock('heading2')} style={buttonStyle}>
            H2 Título 2
          </button>
          <button onClick={() => addBlock('heading3')} style={buttonStyle}>
            H3 Título 3
          </button>
          <button onClick={() => addBlock('image')} style={buttonStyle}>
            🖼️ Imagem
          </button>
          <button onClick={() => addBlock('youtube')} style={buttonStyle}>
            📺 YouTube
          </button>
          <button onClick={() => addBlock('columns')} style={buttonStyle}>
            📐 Colunas
          </button>
          <button onClick={() => addBlock('link')} style={buttonStyle}>
            🔗 Link
          </button>
        </div>
      </div>

      {/* Editor de blocos */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={blocks.map(b => b.id)} strategy={verticalListSortingStrategy}>
          <div style={{ minHeight: '200px' }}>
            {blocks.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                color: '#6c757d',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '2px dashed #dee2e6'
              }}>
                <p>Adicione blocos para começar a criar seu conteúdo</p>
                <p style={{ fontSize: '12px' }}>Arraste os blocos para reordenar</p>
              </div>
            ) : (
              blocks.map((block) => (
                <SortableBlock
                  key={block.id}
                  block={block}
                  onUpdate={updateBlock}
                  onDelete={deleteBlock}
                />
              ))
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '8px 12px',
  border: '1px solid #dee2e6',
  borderRadius: '4px',
  backgroundColor: 'white',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: '500',
  transition: 'all 0.2s'
};

const toolbarButtonStyle: React.CSSProperties = {
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

const miniButtonStyle: React.CSSProperties = {
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
