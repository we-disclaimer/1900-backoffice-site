import React, { useState, useEffect, useRef } from 'react';
import { FormGroup, Label, Box, Text } from '@adminjs/design-system';
const QuillEditor = ({ property, record, onChange }) => {
    const [content, setContent] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const quillRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const currentValue = record?.params?.[property.name] || '';
        setContent(currentValue);
    }, [record, property.name]);
    useEffect(() => {
        if (!window.Quill) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
            document.head.appendChild(link);
            const script = document.createElement('script');
            script.src = 'https://cdn.quilljs.com/1.3.6/quill.min.js';
            script.onload = () => {
                initializeQuill();
            };
            document.head.appendChild(script);
        }
        else {
            initializeQuill();
        }
        return () => {
            if (quillRef.current) {
                quillRef.current = null;
            }
        };
    }, []);
    const initializeQuill = () => {
        if (!containerRef.current || isLoaded)
            return;
        const quill = new window.Quill(containerRef.current, {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'align': [] }],
                    ['link', 'image', 'video'],
                    ['clean']
                ]
            },
            placeholder: 'Digite o conteúdo da notícia...'
        });
        quillRef.current = quill;
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
                    }
                    catch (error) {
                        alert('Erro ao fazer upload da imagem');
                    }
                }
            };
        });
        quill.on('text-change', () => {
            const html = quill.root.innerHTML;
            setContent(html);
            if (onChange) {
                onChange(property.name, html);
            }
        });
        if (content) {
            quill.root.innerHTML = content;
        }
        setIsLoaded(true);
    };
    return (React.createElement(FormGroup, null,
        React.createElement(Label, null,
            property.label || 'Conteúdo',
            property.isRequired && React.createElement("span", { style: { color: 'red' } }, " *")),
        React.createElement(Box, { mt: "xs" },
            React.createElement(Text, { variant: "sm", color: "grey60", mb: "sm" }, "\u2728 Editor moderno com upload de imagens e formata\u00E7\u00E3o rica"),
            React.createElement(Box, { style: {
                    border: isLoaded ? 'none' : '1px solid #ddd',
                    borderRadius: '4px',
                    minHeight: '300px'
                } },
                React.createElement("div", { ref: containerRef })),
            !isLoaded && (React.createElement(Box, { mt: "sm", p: "sm", style: { backgroundColor: '#f8f9fa', borderRadius: '4px' } },
                React.createElement(Text, { variant: "sm", color: "grey60" }, "\uD83D\uDD04 Carregando editor Quill.js..."))),
            isLoaded && (React.createElement(Box, { mt: "sm" },
                React.createElement(Text, { variant: "sm", color: "grey60" }, "\uD83D\uDCA1 Dicas: Use a barra de ferramentas para formatar. Clique no \u00EDcone de imagem para fazer upload."))))));
};
export default QuillEditor;
//# sourceMappingURL=quill-editor.js.map