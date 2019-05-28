import React from 'react';
import { shallow } from 'enzyme';
import { filterByAtrr } from '../utils';
import Header from './header';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    it('Should render without errors', () => {
        const wrapper = setUp();
        expect(wrapper.length).toBe(1);
    });

    it('Should render header div', () => {
        const wrapper = filterByAtrr(setUp(), 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render header logo', () => {
        const wrapper = filterByAtrr(setUp(), 'headerLogo');
        expect(wrapper.length).toBe(1);
    });

});