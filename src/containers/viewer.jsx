import React from 'react';
import components from '../components';

export default props => {
    const Form = components.Form;
    const formProps = { ...props, fields: null };

    return <Form { ...formProps }>{props.fields.map(field => {
        const Field = components[field.type];

        if (field.type === 'Checkbox' && field.props.label) {
            const Label = components.Label;
            const checkboxProps = { ...field.props, label: null };

            return <div>
                <Label
                    children={[
                        <Field { ...checkboxProps } />,
                        field.props.label
                    ]}
                />
            </div>
        } else {

            return <div><Field { ... field.props } /></div>;
        }
    })}</Form>;
};