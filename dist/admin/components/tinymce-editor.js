import React, { useState, useEffect, useRef } from 'react';
import { FormGroup, Label, Box, Text } from '@adminjs/design-system';
const TinyMCEEditor = ({ property, record, onChange }) => {
    const [content, setContent] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const editorRef = useRef(null);
    const textareaRef = useRef(null);
    useEffect(() => {
        const currentValue = record?.params?.[property.name] || '';
        console.log('🔍 TinyMCE - Valor inicial:', currentValue);
        console.log('🔍 TinyMCE - Record completo:', record);
        console.log('🔍 TinyMCE - Property name:', property.name);
        setContent(currentValue);
        if (editorRef.current && currentValue) {
            editorRef.current.setContent(currentValue);
        }
    }, [record, property.name]);
    useEffect(() => {
        if (!window.tinymce) {
            const script = document.createElement('script');
            script.src = 'https://cdn.tiny.cloud/1/h4o7dh7pj58eyvqxfdfkd8kog3ye447ohdwx572d5y2wgmp4/tinymce/6/tinymce.min.js';
            script.onload = () => {
                initializeTinyMCE();
            };
            document.head.appendChild(script);
        }
        else {
            initializeTinyMCE();
        }
        return () => {
            if (editorRef.current) {
                window.tinymce.remove(editorRef.current);
            }
        };
    }, []);
    const initializeTinyMCE = () => {
        if (!textareaRef.current || isLoaded)
            return;
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
            images_upload_handler: async (blobInfo) => {
                return new Promise((resolve, reject) => {
                    const MAX_SIZE = 2 * 1024 * 1024;
                    const fileSize = blobInfo.blob().size;
                    if (fileSize > MAX_SIZE) {
                        const sizeMB = (fileSize / 1024 / 1024).toFixed(2);
                        reject(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${sizeMB}MB`);
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = () => {
                        const base64 = reader.result;
                        console.log('✅ Imagem convertida para base64');
                        resolve(base64);
                    };
                    reader.onerror = () => {
                        console.error('❌ Erro ao converter imagem para base64');
                        reject('Erro ao processar imagem');
                    };
                    reader.readAsDataURL(blobInfo.blob());
                });
            },
            setup: (editor) => {
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
                    const initialContent = record?.params?.[property.name] || '';
                    if (initialContent) {
                        editor.setContent(initialContent);
                        setContent(initialContent);
                    }
                });
            }
        });
    };
    return (React.createElement(FormGroup, null,
        React.createElement(Label, null,
            property.label || 'Conteúdo',
            property.isRequired && React.createElement("span", { style: { color: 'red' } }, " *")),
        React.createElement(Box, { mt: "xs" },
            React.createElement(Text, { variant: "sm", color: "grey60", mb: "sm" }, "Editor avan\u00E7ado com upload de imagens e formata\u00E7\u00E3o rica"),
            React.createElement("textarea", { ref: textareaRef, style: { width: '100%', minHeight: '200px' }, defaultValue: record?.params?.[property.name] || content, onChange: (e) => {
                    if (!isLoaded && onChange) {
                        onChange(property.name, e.target.value);
                    }
                } }),
            !isLoaded && (React.createElement(Box, { mt: "sm", p: "sm", style: { backgroundColor: '#f8f9fa', borderRadius: '4px' } },
                React.createElement(Text, { variant: "sm", color: "grey60" }, "\uD83D\uDCDD Carregando editor avan\u00E7ado..."))))));
};
export default TinyMCEEditor;
//# sourceMappingURL=tinymce-editor.js.map