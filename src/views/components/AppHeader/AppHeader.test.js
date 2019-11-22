import React from 'react';
import { shallow } from 'enzyme';

import AppHeader from './AppHeader';
import { findByTestAttr, storeFactory } from '../../../testUtils';

const setup = (props = {}, state = null) => {
    const store = storeFactory()
    return shallow(<AppHeader store={store} {...props} />).dive().dive()
}

describe('render', () => {
    describe('app header', () => {
        test('renders app header div', () => {
            const wrapper = setup()
            const header = findByTestAttr(wrapper, 'app-header')
            expect(header.length).toBe(1)
        });

        test('renders search box', () => {
            const wrapper = setup()
            const searchBox = findByTestAttr(wrapper, 'search-box')
            expect(searchBox.length).toBe(1)
        });

        test('renders input field', () => {
            const wrapper = setup()
            const input = findByTestAttr(wrapper, 'input-field')
            expect(input.length).toBe(1)
        });
    })

    describe('actors list', () => {
        test('NOT IMPL renders actors list upon receiving input from user', () => {
            // some async magic testing :) 
        });
    })

})

describe('update state', () => {

})

/*
   Invariant Violation: Could not find "store" in the context of "Connect(AppHeader)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(AppHeader) in connect options.
w
       8 | Enzyme.configure({ adapter: new EnzymeAdapter() })
       9 |
    > 10 | const setup = (props = {}, state = null) => wrapper = shallow(<AppHeader {...props} />)
         |                                                       ^
      11 |
      12 | const findByTestAttr = (wrapper, selector) => wrapper.find(`[data-test='${selector}']`)
      13 |

solution => create storeFactory function in testUtils.js that creates store and pass it as a prop => but then we have dive two level as we get

    const setup = (initialState = {}) => {
        const store = storeFactory(initialState)
        const deepDiveWrapper = shallow(<Input store={store} />).dive().dive();
        // console.log(shallow(<Input store={store} />).debug())
        // console.log(deepDiveWrapper)
        return deepDiveWrapper
    }

*/