import React, { useEffect, useRef } from 'react';
import { ShowPropertyProps } from 'adminjs';

const VisualComposerShow: React.FC<ShowPropertyProps> = ({ record, property }) => {
  const value = (record?.params?.[property.name] as string) || '';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      img.style.maxWidth = '400px';
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      img.style.margin = '1rem auto';
    });

    const paragraphs = container.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      p.style.marginTop = '1rem';
      if (index === 0) {
        p.style.marginTop = '0';
      }
    });
  }, [value]);

  if (!value) {
    return <span style={{ color: '#9aa0a6' }}>Sem conteúdo</span>;
  }

  return (
    <div
      ref={containerRef}
      style={{ lineHeight: 1.6 }}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};

export default VisualComposerShow;

