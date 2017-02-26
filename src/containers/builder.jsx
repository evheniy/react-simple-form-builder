import React from 'react';
import { autobind } from 'core-decorators';
import Highlight from 'react-highlight';
import metadata from '../metadata';
import components from '../components';
import Viewer from './viewer';

require('highlight.js/styles/github.css');

const json = {
    width: '90%',
    height: 200,
    overflow: 'scroll',
    padding: 0,
    fontSize: 12,
    background: '#f8f8f8',
};

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            form: {
                method: 'GET',
                action: '/',
            },
            field: {
                type: 'Text',
                props: {},
            },
            fields: [],
        };
    }

    @autobind
    getFormProps() {
        const List = components.List;
        const Text = components.Text;
        const Select = components.Select;

        return <List items={Object.keys(metadata.Form).map(key => {
            const Label = components.Label;
            let value;

            if (Array.isArray(metadata.Form[key])) {
                value = <Select
                    items={metadata.Form[key].map(item => ({ text: item }))}
                    onChange={event => this.setState({
                        ...this.state,
                        form: {
                            ...this.state.form,
                            [key]: event.target.value
                        }
                    })}
                />
            } else {
                value = <Text
                    value={this.state.form[key] || metadata.Form[key]}
                    onChange={event => this.setState({
                        ...this.state,
                        form: {
                            ...this.state.form,
                            [key]: event.target.value
                        }
                    })}
                />
            }

            return <div><Label>{key} {value}</Label></div>;
        })} />;
    }

    @autobind
    getFormForViewer() {
        return { ...this.state.form, fields: [ ...this.state.fields, { type: 'Submit' } ] };
    }

    @autobind
    getFormForFields() {
        const items = [];
        const List = components.List;
        const Select = components.Select;
        const Text = components.Text;

        items.push(<Select
            items={[
                { text: 'Text'},
                { text: 'Label'},
                { text: 'Checkbox'}
            ]}
            onChange={event => {
                if (event.target.value !== 'Select type...') {
                    this.setState({ ...this.state, field: { type: event.target.value, props: {} }})
                }}
            }
        />);

        if (this.state.field.type) {
            items.push(<List items={Object.keys(metadata[this.state.field.type]).map(key => {
                const Label = components.Label;
                let value;

                const getState = (key, data) => {
                    const state = { ...this.state};

                    state.field.props = state.field.props || {};
                    state.field.props[key] = data;

                    return state;
                };

                if (Array.isArray(metadata[this.state.field.type][key])) {
                    value = <Select
                        items={metadata[this.state.field.type].props[key].map(item => ({ text: item }))}
                        onChange={event => this.setState(getState(key, event.target.value))}
                    />
                } else {
                    value = <Text
                        value={(this.state.field.props && this.state.field.props[key]) || metadata[this.state.field.type][key]}
                        onChange={event => this.setState(getState(key, event.target.value))}
                    />
                }

                return <div><Label>{key} {value}</Label></div>;
            })} />);
        }

        return <List items={items} />
    }

    render() {
        const Button = components.Button;
        let fieldButton;
        if (this.state.field.type) {
            fieldButton = <Button
                value="Add Field"
                onClick={() => {
                    this.setState({
                        ...this.state,
                        fields: [ ...this.state.fields, this.state.field ],
                        field: { type: this.state.field.type, props: {} }
                    });
                }}
            />;
        }

        return <table style={{ width: '100%' }}>
            <thead>
            <tr>
                <th>Form properties</th>
                <th>Field</th>
                <th>View</th>
                <th>JSON</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style={{ verticalAlign: 'top', border: '1px solid black', padding: 10 }}>
                    <div>
                        {this.getFormProps(this.state.form)}
                    </div>
                    <div style={{ margin: 10 }}>
                        <Button
                            value="Save Form"
                            onClick={() => this.props.onSave(this.getFormForViewer())}
                        />
                    </div>
                </td>
                <td style={{ verticalAlign: 'top', border: '1px solid black', padding: 10 }}>
                    <div>
                        {this.getFormForFields()}
                    </div>
                    <div style={{ margin: 10 }}>
                        {fieldButton}
                    </div>
                </td>
                <td style={{ verticalAlign: 'top', border: '1px solid black', padding: 10 }}>
                    <div style={{ textAlign: 'center' }}>
                        <Viewer { ...this.getFormForViewer() } />
                    </div>
                </td>
                <td style={{ verticalAlign: 'top', border: '1px solid black' }}>
                    <div style={json}>
                        <Highlight className="json hljs">
                            {JSON.stringify(this.getFormForViewer(), null, 2)}
                        </Highlight>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>;
    }
}