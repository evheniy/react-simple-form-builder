import React from 'react';

export default props => {
    const newProps = { ...props };
    newProps.type = 'text';
    return <input {...newProps} />;
}