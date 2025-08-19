import React from 'react';
import { BasePropertyProps } from 'adminjs';
interface TiptapEditorProps extends BasePropertyProps {
}
declare global {
    interface Window {
        Editor: any;
        StarterKit: any;
        Image: any;
        Link: any;
        TextAlign: any;
        Highlight: any;
        Underline: any;
    }
}
declare const TiptapEditor: React.FC<TiptapEditorProps>;
export default TiptapEditor;
