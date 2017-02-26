import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import components from '../../src/components';

describe('Text component test', () => {

    it('renders Text components', () => {
        const Text = components.Text;
        const wrapper = shallow(<Text />);
        expect(wrapper.props().type).to.be.equal('text');
    });

});
