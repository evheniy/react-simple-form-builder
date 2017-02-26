import React from 'react';

export default props => {
    props.type = 'submit';
    return <input {...props} />;
}