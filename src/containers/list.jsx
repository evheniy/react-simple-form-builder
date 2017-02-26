import React from 'react';
import components from '../components';
import Viewer from './viewer';

export default props => {
    const List = components.List;
    return <List
        items={props.items.map(
            item => <div style={{ textAlign: 'center' }}><hr /><Viewer { ...item } /></div>
        )}
    />;
};