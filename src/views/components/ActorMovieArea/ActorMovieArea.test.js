import React from 'react';
import {shallow} from 'enzyme';

import ActorMovieArea from './ActorMovieArea';
import { findByTestAttr} from '../../../testUtils';

test('renders actor movie-list area', () => {
    const wrapper = shallow(<ActorMovieArea/>)
    const mainDiv = findByTestAttr(wrapper, 'actor-movie-area') 
    expect(mainDiv.length).toBe(1)
});