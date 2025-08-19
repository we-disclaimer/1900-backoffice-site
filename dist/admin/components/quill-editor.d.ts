import React from 'react';
import { BasePropertyProps } from 'adminjs';
interface QuillEditorProps extends BasePropertyProps {
}
declare global {
    interface Window {
        Quill: any;
    }
}
declare const QuillEditor: React.FC<QuillEditorProps>;
export default QuillEditor;
