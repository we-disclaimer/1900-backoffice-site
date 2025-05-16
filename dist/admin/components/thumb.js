import React from 'react';
import PropTypes from 'prop-types';
function Thumb(props) {
    const { record } = props;
    const url = `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${record.params.url}`;
    if (!url) {
        return React.createElement("span", null, "No image");
    }
    return (React.createElement("img", { src: url, alt: record.params.alt || 'Thumbnail', style: { width: '50px', height: 'auto' } }));
}
Thumb.propTypes = {
    record: PropTypes.shape({
        params: PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string,
        }).isRequired,
    }).isRequired,
};
export default Thumb;
//# sourceMappingURL=thumb.js.map