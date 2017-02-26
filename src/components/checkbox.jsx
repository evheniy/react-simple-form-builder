import React from 'react';

export default props => {
    props.type = 'checkbox';
    props.checked =  parseInt(props.checked || '0', 10);
    return <input {...props} />;
}