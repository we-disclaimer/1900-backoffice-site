import React from 'react';
import { BasePropertyProps } from 'adminjs';
interface TinyMCEEditorProps extends BasePropertyProps {
}
declare global {
    interface Window {
        tinymce: any;
    }
}
declare const TinyMCEEditor: React.FC<TinyMCEEditorProps>;
export default TinyMCEEditor;
