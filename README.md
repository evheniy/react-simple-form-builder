# React simple form builder


[![NPM](https://nodei.co/npm/react-simple-form-builder.png)](https://npmjs.org/package/react-simple-form-builder)

[![npm version](https://badge.fury.io/js/react-simple-form-builder.svg)](https://badge.fury.io/js/react-simple-form-builder)
[![Build Status](https://travis-ci.org/evheniy/react-simple-form-builder.svg?branch=master)](https://travis-ci.org/evheniy/react-simple-form-builder)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/react-simple-form-builder/badge.svg?branch=master)](https://coveralls.io/github/evheniy/react-simple-form-builder?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/react-simple-form-builder/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/react-simple-form-builder/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/react-simple-form-builder)

[![Dependency Status](https://david-dm.org/evheniy/react-simple-form-builder.svg)](https://david-dm.org/evheniy/react-simple-form-builder)
[![devDependency Status](https://david-dm.org/evheniy/react-simple-form-builder/dev-status.svg)](https://david-dm.org/evheniy/react-simple-form-builder#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/react-simple-form-builder)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/react-simple-form-builder/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/react-simple-form-builder.svg)](https://github.com/evheniy/react-simple-form-builder/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/react-simple-form-builder.svg)](https://github.com/evheniy/react-simple-form-builder/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/react-simple-form-builder.svg)](https://github.com/evheniy/react-simple-form-builder/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/react-simple-form-builder.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

# Demo

    git clone https://github.com/evheniy/react-simple-form-builder.git
    cd react-simple-form-builder
    npm i
    npm run server
    
Open http://127.0.0.1:3000/

## How to install

    npm i -S react-simple-form-builder
    
## How to use

    import builder from 'react-simple-form-builder';

### Label

    const Label = builder.components.Label;
    
    ReactDOM.render(
        <Label>label</Label>,
        document.getElementById('root')
    );
    
### List

    const List = builder.components.List;
    
    eactDOM.render(
        <List items={[
            <Label id="1">text1</Label>,
            <Label id="2">text2</Label>,
        ]} />,
        document.getElementById('root')
    );
    
### Button

    const Button = builder.components.Button;
    
    ReactDOM.render(
        <Button value={'button'} />,
        document.getElementById('root')
    );
    
### Text

    const Text = builder.components.Text;
    
    ReactDOM.render(
        <Text value={'text'} />,
        document.getElementById('root')
    );
    
### Submit

    const Submit = builder.components.Submit;
    
    ReactDOM.render(
        <Submit value={'submit'} />,
        document.getElementById('root')
    );
    
### Checkbox

    const Checkbox = builder.components.Checkbox;
    
    ReactDOM.render(
        <Label children={[
            <Checkbox value={'checkbox'} />,
            'checkbox',
        ]} />,
        document.getElementById('root')
    );
    
### Form

    const Form = builder.components.Form;
    
    ReactDOM.render(
        <Form method="GET" action="/" children={<List items={[
            <Label id="1">label</Label>,
            <Text value="5" id="5" />,
            <Label children={[
                <Checkbox value={'checkbox'} />,
                'checkbox'
            ]} text="test" id="4" />,
            <Button value={'button'} id="2" />,
            <Submit value={'submit'} id="3" />,
        ]} />} />,
        document.getElementById('root')
    );

## Testing

    npm t
