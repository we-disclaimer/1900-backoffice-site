/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
// admin/components/upload-edit.tsx
import React from 'react';
import { BasePropertyProps } from 'adminjs';

const UploadEdit: React.FC<BasePropertyProps> = (props) => (
  <div>
    <label htmlFor={props.property.name}>Upload</label>
    <input id={props.property.name} type="file" name="file" />
  </div>
);

export default UploadEdit;
