import React from 'react';

export default props => <div>{props.items.map(item => <div key={item.id}>{item}</div>)}</div>;