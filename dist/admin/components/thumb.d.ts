import React from 'react';
import PropTypes from 'prop-types';
declare function Thumb(props: any): React.JSX.Element;
declare namespace Thumb {
    var propTypes: {
        record: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            params: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
                url: PropTypes.Validator<string>;
                alt: PropTypes.Requireable<string>;
            }>>>;
        }>>>;
    };
}
export default Thumb;
