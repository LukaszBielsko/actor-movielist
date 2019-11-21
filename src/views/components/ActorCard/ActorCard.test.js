import React from 'react';
import { shallow } from 'enzyme';

import ActorCard from './ActorCard';
import { storeFactory, findByTestAttr } from '../../../testUtils';

const setup = (state = {}) => {
    const store = storeFactory(state)
    const wrapper = shallow(<ActorCard store={store} />).dive().dive()
    return wrapper
}


describe('actor card', () => {

    describe('render', () => {
    
        describe('render BEFORE user choosing the actor', () => {
            let wrapper;
            beforeEach(() => {
                wrapper = setup()
            })

            test('should render actor card', () => {
                const component = findByTestAttr(wrapper, 'actor-card')
                expect(component.length).toBe(1)
            });

            test('should render "start search" info when no actor props passed', () => {
                const startSearchParagraph = findByTestAttr(wrapper, 'start-search-info')
                expect(startSearchParagraph.length).toBe(1)
            });
        })

        describe('render AFTER user chosen the actor', () => {
            let wrapper
            const initialState = {
                search: {
                    searchQuery: 'Sylvester '
                },
                actor: {
                    actorID: 45,
                    actorMovies: ['Rocky 567', 'Rocky 1234', 'Rambo 992'],
                    actorInfo: {
                        birthday: '1956-07-09',
                        name: 'Sylvester',
                        biography: 'He was born. He was born ready.',
                        place_of_birth: 'Concord, California, USA',
                    },
                    actorImageURL: 'this is not an image, this is string'
                }
            }

            beforeEach(() => {
                wrapper = setup(initialState)
            })

            test('should not render "start search" info when actor props passed', () => {
                const startSearchParagraph = findByTestAttr(wrapper, 'start-search-info')
                expect(startSearchParagraph.length).toBe(0)
            });

            test('should render h1 with actor name', () => {
                const h1 = findByTestAttr(wrapper, 'actor-name')
                expect(h1.text()).toEqual('Sylvester')
            });

            test('should render span with actor birth date', () => {
                const birthSpan = findByTestAttr(wrapper, 'birth-date')
                expect(birthSpan.text()).toEqual('1956-07-09')
            });

            test('should render span with actor birth place', () => {
                const birthPlaceSpan = findByTestAttr(wrapper, 'birth-place')
                expect(birthPlaceSpan.text()).toEqual('Concord, California, USA')
            })

            test('should render paragraph with actors biography', () => {
                const biography = findByTestAttr(wrapper, 'bio')
                expect(biography.text()).toEqual('He was born. He was born ready.')
            });

        })
    })

    describe('state update', () => {
        /* TODO no update state here I think */
    })
})
