/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useRef } from 'react';
import { BasePropertyProps } from 'adminjs';
import { FormGroup, Label, Box, Text } from '@adminjs/design-system';

interface QuillEditorProps extends BasePropertyProps {}

declare global {
  interface Window {
    Quill: any;
  }
}

const QuillEditor: React.FC<QuillEditorProps> = ({ property, record, onChange }) => {
  const [content, setContent] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const quillRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inicializar com valor atual
    const currentValue = record?.params?.[property.name] || '';
    setContent(currentValue);
  }, [record, property.name]);

  useEffect(() => {
    // Carregar Quill dinamicamente
    if (!window.Quill) {
      // Carregar CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
      document.head.appendChild(link);

      // Carregar JS
      const script = document.createElement('script');
      script.src = 'https://cdn.quilljs.com/1.3.6/quill.min.js';
      script.onload = () => {
        initializeQuill();
      };
      document.head.appendChild(script);
    } else {
      initializeQuill();
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null;
      }
    };
  }, []);

  const initializeQuill = () => {
    if (!containerRef.current || isLoaded) return;

    const quill = new window.Quill(containerRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'align': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      },
      placeholder: 'Digite o conteúdo da notícia...'
    });

    quillRef.current = quill;

    // Configurar upload de imagem customizado
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append('file', file);

          try {
            const response = await fetch('/admin/api/resources/Media/actions/new', {
              method: 'POST',
              body: formData,
            });
            
            const result = await response.json();
            if (result.record?.params?.url) {
              const range = quill.getSelection();
              quill.insertEmbed(range?.index || 0, 'image', result.record.params.url);
            }
          } catch (error) {
            alert('Erro ao fazer upload da imagem');
          }
        }
      };
    });

    // Listener para mudanças
    quill.on('text-change', () => {
      const html = quill.root.innerHTML;
      setContent(html);
      if (onChange) {
        onChange(property.name, html);
      }
    });

    // Definir conteúdo inicial
    if (content) {
      quill.root.innerHTML = content;
    }

    setIsLoaded(true);
  };

  return (
    <FormGroup>
      <Label>
        {property.label || 'Conteúdo'}
        {property.isRequired && <span style={{ color: 'red' }}> *</span>}
      </Label>
      
      <Box mt="xs">
        <Text variant="sm" color="grey60" mb="sm">
          ✨ Editor moderno com upload de imagens e formatação rica
        </Text>
        
        <Box
          style={{
            border: isLoaded ? 'none' : '1px solid #ddd',
            borderRadius: '4px',
            minHeight: '300px'
          }}
        >
          <div ref={containerRef} />
        </Box>
        
        {!isLoaded && (
          <Box mt="sm" p="sm" style={{ backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <Text variant="sm" color="grey60">
              🔄 Carregando editor Quill.js...
            </Text>
          </Box>
        )}

        {isLoaded && (
          <Box mt="sm">
            <Text variant="sm" color="grey60">
              💡 Dicas: Use a barra de ferramentas para formatar. Clique no ícone de imagem para fazer upload.
            </Text>
          </Box>
        )}
      </Box>
    </FormGroup>
  );
};

export default QuillEditor;
