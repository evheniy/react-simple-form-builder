import ReactDOM from 'react-dom';
import form from './';

const List = form.components.List;
const Label = form.components.Label;
const Button = form.components.Button;
const Submit = form.components.Submit;
const Checkbox = form.components.Checkbox;
const Form = form.components.Form;

ReactDOM.render(
    <Form method="GET" action="/" children={<List items={[
        <Label children={'label'} id="1" />,
        <Button value={'button'} id="2" />,
        <Submit value={'submit'} id="3" />,
        <Label children={[
            <Checkbox value={'checkbox'} />,
            'checkbox'
        ]} text="test" id="4" />
    ]} />} />,
    document.getElementById('root')
);