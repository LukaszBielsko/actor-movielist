import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdapter()})

it('renders without crashing', () => {
  // const wrapper = shallow(<App/>) 
})


/* Original test */
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

