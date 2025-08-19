/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useRef } from 'react';
import { BasePropertyProps } from 'adminjs';
import { FormGroup, Label, Box, Text } from '@adminjs/design-system';

interface TinyMCEEditorProps extends BasePropertyProps {}

declare global {
  interface Window {
    tinymce: any;
  }
}

const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({ property, record, onChange }) => {
  const [content, setContent] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const editorRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Inicializar com valor atual
    const currentValue = record?.params?.[property.name] || '';
    console.log('🔍 TinyMCE - Valor inicial:', currentValue);
    console.log('🔍 TinyMCE - Record completo:', record);
    console.log('🔍 TinyMCE - Property name:', property.name);
    
    setContent(currentValue);
    
    // Se o TinyMCE já estiver carregado, atualizar o conteúdo
    if (editorRef.current && currentValue) {
      editorRef.current.setContent(currentValue);
    }
  }, [record, property.name]);

  useEffect(() => {
    // Carregar TinyMCE dinamicamente
    if (!window.tinymce) {
      const script = document.createElement('script');
      script.src = 'https://cdn.tiny.cloud/1/h4o7dh7pj58eyvqxfdfkd8kog3ye447ohdwx572d5y2wgmp4/tinymce/6/tinymce.min.js';
      script.onload = () => {
        initializeTinyMCE();
      };
      document.head.appendChild(script);
    } else {
      initializeTinyMCE();
    }

    return () => {
      if (editorRef.current) {
        window.tinymce.remove(editorRef.current);
      }
    };
  }, []);

  const initializeTinyMCE = () => {
    if (!textareaRef.current || isLoaded) return;

    window.tinymce.init({
      target: textareaRef.current,
      height: 400,
      menubar: false,
      plugins: [
        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
        'insertdatetime', 'media', 'table', 'help', 'wordcount'
      ],
      toolbar: 'undo redo | blocks | ' +
        'bold italic forecolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | image media link | code fullscreen | help',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
      images_upload_handler: async (blobInfo: any) => {
        return new Promise((resolve, reject) => {
          // OPÇÃO 1: Usar base64 (mais simples, funciona sempre)
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result as string;
            console.log('✅ Imagem convertida para base64');
            resolve(base64);
          };
          reader.onerror = () => {
            console.error('❌ Erro ao converter imagem para base64');
            reject('Erro ao processar imagem');
          };
          reader.readAsDataURL(blobInfo.blob());
          
          // OPÇÃO 2: Upload via FormData (comentado, pode tentar depois)
          /*
          const formData = new FormData();
          formData.append('file', blobInfo.blob(), blobInfo.filename());
          formData.append('alt', blobInfo.filename() || 'Imagem do TinyMCE');
          
          fetch('/admin/api/resources/Media/actions/new', {
            method: 'POST',
            body: formData,
            credentials: 'include',
          })
          .then(response => response.json())
          .then(result => {
            if (result.record?.params?.url) {
              resolve(result.record.params.url);
            } else {
              reject('Upload failed');
            }
          })
          .catch(error => {
            console.error('Upload error:', error);
            reject('Upload failed');
          });
          */
        });
      },
      setup: (editor: any) => {
        editorRef.current = editor;
        editor.on('change', () => {
          const newContent = editor.getContent();
          setContent(newContent);
          if (onChange) {
            onChange(property.name, newContent);
          }
        });
        
        editor.on('init', () => {
          setIsLoaded(true);
          // Carregar conteúdo inicial do record
          const initialContent = record?.params?.[property.name] || '';
          if (initialContent) {
            editor.setContent(initialContent);
            setContent(initialContent);
          }
        });
      }
    });
  };

  return (
    <FormGroup>
      <Label>
        {property.label || 'Conteúdo'}
        {property.isRequired && <span style={{ color: 'red' }}> *</span>}
      </Label>
      
      <Box mt="xs">
        <Text variant="sm" color="grey60" mb="sm">
          Editor avançado com upload de imagens e formatação rica
        </Text>
        
        <textarea
          ref={textareaRef}
          style={{ width: '100%', minHeight: '200px' }}
          defaultValue={record?.params?.[property.name] || content}
          onChange={(e) => {
            // Fallback caso TinyMCE não carregue
            if (!isLoaded && onChange) {
              onChange(property.name, e.target.value);
            }
          }}
        />
        
        {!isLoaded && (
          <Box mt="sm" p="sm" style={{ backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <Text variant="sm" color="grey60">
              📝 Carregando editor avançado...
            </Text>
          </Box>
        )}
      </Box>
    </FormGroup>
  );
};

export default TinyMCEEditor;
