import React from 'react';
import Builder from './builder';
import List from './list';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            forms: [],
        };
    }

    render() {
        return <div>
            <Builder onSave={form => this.setState({ forms: [...this.state.forms, form] })} />
            <List items={this.state.forms} />
        </div>;
    }
}