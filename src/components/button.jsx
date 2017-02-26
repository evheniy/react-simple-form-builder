import React from 'react';

export default props => {
    props.type = 'button';
    return <input {...props} />;
}