import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdapter()})

it('renders withour crashing', () => {
  const wrapper = shallow(<App/>) 
  console.log(wrapper.debug())
  expect(wrapper).toBeTruthy()
})


/* Original test */
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

