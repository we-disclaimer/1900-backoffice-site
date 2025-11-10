import React, { useEffect, useRef } from 'react';
const VisualComposerShow = ({ record, property }) => {
    const value = record?.params?.[property.name] || '';
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
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
        return React.createElement("span", { style: { color: '#9aa0a6' } }, "Sem conte\u00FAdo");
    }
    return (React.createElement("div", { ref: containerRef, style: { lineHeight: 1.6 }, dangerouslySetInnerHTML: { __html: value } }));
};
export default VisualComposerShow;
//# sourceMappingURL=visual-composer-show.js.map