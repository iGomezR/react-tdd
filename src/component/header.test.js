import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    it('Should render without errors', () => {
        const wrapper = setUp();
        console.log(wrapper.debug());
        expect(wrapper.length).toBe(1);
    });

});