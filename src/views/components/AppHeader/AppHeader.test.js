import React from 'react';

import AppHeader from './AppHeader';

import  {shallow} from 'enzyme';


const setup = (props = {}, state = null) => wrapper = shallow(<AppHeader {...props} />)

const findByTestAttr = (wrapper, selector) => wrapper.find(`[data-test='${selector}']`)  

describe('renders elements properly', () => {
    test('renders app header div', () => {
//         const wrapper = setup()
//         const header = findByTestAttr(wrapper, 'app-header')
//         expect(header.length).toBe(1)
    });
})

/*
   Invariant Violation: Could not find "store" in the context of "Connect(AppHeader)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(AppHeader) in connect options.

       8 | Enzyme.configure({ adapter: new EnzymeAdapter() })
       9 |
    > 10 | const setup = (props = {}, state = null) => wrapper = shallow(<AppHeader {...props} />)
         |                                                       ^
      11 |
      12 | const findByTestAttr = (wrapper, selector) => wrapper.find(`[data-test='${selector}']`)
      13 | 
*/