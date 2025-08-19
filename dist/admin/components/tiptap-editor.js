import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Box, Text } from '@adminjs/design-system';
const TiptapEditor = ({ property, record, onChange }) => {
    const [content, setContent] = useState('');
    const [editor, setEditor] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const currentValue = record?.params?.[property.name] || '';
        console.log('🔍 Tiptap - Valor inicial:', currentValue);
        setContent(currentValue);
    }, [record, property.name]);
    useEffect(() => {
        loadTiptap();
        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, []);
    const loadTiptap = async () => {
        if (!document.querySelector('#tiptap-css')) {
            const link = document.createElement('link');
            link.id = 'tiptap-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/@tiptap/extension-text-align@2.1.13/dist/index.css';
            document.head.appendChild(link);
            const style = document.createElement('style');
            style.innerHTML = `
        .tiptap-editor {
          border: 1px solid #ddd;
          border-radius: 8px;
          min-height: 300px;
        }
        .tiptap-toolbar {
          border-bottom: 1px solid #ddd;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px 8px 0 0;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .tiptap-content {
          padding: 16px;
          min-height: 250px;
          outline: none;
        }
        .tiptap-content h1 { font-size: 2em; font-weight: bold; margin: 0.67em 0; }
        .tiptap-content h2 { font-size: 1.5em; font-weight: bold; margin: 0.75em 0; }
        .tiptap-content h3 { font-size: 1.17em; font-weight: bold; margin: 0.83em 0; }
        .tiptap-content p { margin: 1em 0; }
        .tiptap-content ul, .tiptap-content ol { margin: 1em 0; padding-left: 2em; }
        .tiptap-content blockquote { 
          border-left: 4px solid #ddd; 
          margin: 1em 0; 
          padding-left: 1em; 
          color: #666; 
        }
        .tiptap-content img { max-width: 100%; height: auto; border-radius: 4px; }
        .tiptap-content .highlight { background-color: yellow; }
        .tiptap-btn {
          padding: 6px 12px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        .tiptap-btn:hover { background: #f0f0f0; }
        .tiptap-btn.active { background: #0c4a2b; color: white; }
        .tiptap-separator { width: 1px; background: #ddd; margin: 0 4px; }
      `;
            document.head.appendChild(style);
        }
        try {
            if (!window.Editor) {
                await loadScript('https://unpkg.com/@tiptap/core@2.1.13/dist/index.umd.js');
                await loadScript('https://unpkg.com/@tiptap/starter-kit@2.1.13/dist/index.umd.js');
                await loadScript('https://unpkg.com/@tiptap/extension-image@2.1.13/dist/index.umd.js');
                await loadScript('https://unpkg.com/@tiptap/extension-link@2.1.13/dist/index.umd.js');
                await loadScript('https://unpkg.com/@tiptap/extension-text-align@2.1.13/dist/index.umd.js');
                await loadScript('https://unpkg.com/@tiptap/extension-highlight@2.1.13/dist/index.umd.js');
                await loadScript('https://unpkg.com/@tiptap/extension-underline@2.1.13/dist/index.umd.js');
            }
            initializeTiptap();
        }
        catch (error) {
            console.error('Erro ao carregar Tiptap:', error);
        }
    };
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };
    const initializeTiptap = () => {
        const editorElement = document.getElementById('tiptap-content');
        if (!editorElement || !window.Editor)
            return;
        const newEditor = new window.Editor({
            element: editorElement,
            extensions: [
                window.StarterKit,
                window.Image.configure({
                    HTMLAttributes: {
                        class: 'tiptap-image',
                    },
                }),
                window.Link.configure({
                    openOnClick: false,
                }),
                window.TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
                window.Highlight,
                window.Underline,
            ],
            content: content,
            onUpdate: ({ editor }) => {
                const html = editor.getHTML();
                setContent(html);
                if (onChange) {
                    onChange(property.name, html);
                }
            },
        });
        setEditor(newEditor);
        setIsLoaded(true);
    };
    const addImage = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files?.[0];
            if (file && editor) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64 = reader.result;
                    editor.chain().focus().setImage({ src: base64 }).run();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };
    const addLink = () => {
        const url = prompt('Digite a URL do link:');
        if (url && editor) {
            editor.chain().focus().setLink({ href: url }).run();
        }
    };
    const ToolbarButton = ({ onClick, isActive = false, children }) => (React.createElement("button", { className: `tiptap-btn ${isActive ? 'active' : ''}`, onClick: onClick, type: "button" }, children));
    const Separator = () => React.createElement("div", { className: "tiptap-separator" });
    return (React.createElement(FormGroup, null,
        React.createElement(Label, null,
            property.label || 'Conteúdo',
            property.isRequired && React.createElement("span", { style: { color: 'red' } }, " *")),
        React.createElement(Box, { mt: "xs" },
            React.createElement(Text, { variant: "sm", color: "grey60", mb: "sm" }, "\u26A1 Editor Tiptap moderno com controles avan\u00E7ados"),
            React.createElement("div", { className: "tiptap-editor" },
                isLoaded && editor && (React.createElement("div", { className: "tiptap-toolbar" },
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive('bold') },
                        React.createElement("strong", null, "B")),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleItalic().run(), isActive: editor.isActive('italic') },
                        React.createElement("em", null, "I")),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleUnderline().run(), isActive: editor.isActive('underline') },
                        React.createElement("u", null, "U")),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleHighlight().run(), isActive: editor.isActive('highlight') }, "\uD83D\uDD8D\uFE0F"),
                    React.createElement(Separator, null),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), isActive: editor.isActive('heading', { level: 1 }) }, "H1"),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), isActive: editor.isActive('heading', { level: 2 }) }, "H2"),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), isActive: editor.isActive('heading', { level: 3 }) }, "H3"),
                    React.createElement(Separator, null),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().setTextAlign('left').run(), isActive: editor.isActive({ textAlign: 'left' }) }, "\uD83D\uDCC4"),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().setTextAlign('center').run(), isActive: editor.isActive({ textAlign: 'center' }) }, "\uD83D\uDCC4"),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().setTextAlign('right').run(), isActive: editor.isActive({ textAlign: 'right' }) }, "\uD83D\uDCC4"),
                    React.createElement(Separator, null),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleBulletList().run(), isActive: editor.isActive('bulletList') }, "\u2022 Lista"),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleOrderedList().run(), isActive: editor.isActive('orderedList') }, "1. Lista"),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().toggleBlockquote().run(), isActive: editor.isActive('blockquote') }, "\uD83D\uDCAC"),
                    React.createElement(Separator, null),
                    React.createElement(ToolbarButton, { onClick: addImage }, "\uD83D\uDDBC\uFE0F Imagem"),
                    React.createElement(ToolbarButton, { onClick: addLink }, "\uD83D\uDD17 Link"),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().undo().run() }, "\u21B6"),
                    React.createElement(ToolbarButton, { onClick: () => editor.chain().focus().redo().run() }, "\u21B7"))),
                React.createElement("div", { id: "tiptap-content", className: "tiptap-content" }),
                !isLoaded && (React.createElement(Box, { p: "lg", style: { textAlign: 'center' } },
                    React.createElement(Text, { variant: "sm", color: "grey60" }, "\u26A1 Carregando editor Tiptap...")))),
            isLoaded && (React.createElement(Box, { mt: "sm" },
                React.createElement(Text, { variant: "sm", color: "grey60" }, "\uD83D\uDCA1 Use a barra de ferramentas para formatar. Tiptap oferece uma experi\u00EAncia moderna de edi\u00E7\u00E3o."))))));
};
export default TiptapEditor;
//# sourceMappingURL=tiptap-editor.js.map