import React from 'react';
import { shallow } from 'enzyme';
import { filterByAtrr } from '../utils';
import Headline from './headline';

const setUp = (props={}) => shallow(<Headline {...props} />);

describe('Headline Component', () => {

    describe('Should have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Header test',
                desc: 'Description test'
            };
            wrapper = setUp(props);
        });

        it('Should render with out errors', () => {
            expect(filterByAtrr(wrapper, 'HeadlineComponent').length).toBe(1);
        })

    });

    describe('Should NO have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should render with out errors', () => {
            expect(filterByAtrr(wrapper, 'HeadlineComponent').length).toBe(1);
        })
        
    });
    
});