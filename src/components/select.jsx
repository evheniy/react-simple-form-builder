import React from 'react';

export default props => {
    const items = props.items;
    const selectProps = { ...props, items: null };

    return <select {...selectProps} >
        {items.map(item => <option {...item.props}>{item.text}</option>)}
    </select>;
}