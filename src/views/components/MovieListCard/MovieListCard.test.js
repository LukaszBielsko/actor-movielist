import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../testUtils';
import MovieCardList from './MovieListCard';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<MovieCardList store={store} />).dive().dive()
    return wrapper
}

describe('movie list card', () => {

    describe('render', () => {

        describe('render BEFORE user choosing actor', () => {
            test('should render paragraph saying "empty movie list" ', () => {
                const wrapper = setup()
                const infoParagraph = findByTestAttr(wrapper, 'empty-list-info')
                expect(infoParagraph.length).toBe(1)
            });
        });

        describe('render AFTER user choose actor', () => {

            let wrapper
            beforeEach(() => {
                const initialState = {
                    actor: {
                        actorMovies: [{ original_title: 'Rocky 567' }, { original_title: 'Rocky 1234' }, { original_title: 'Rambo 992' }]
                    }
                }
                wrapper = setup(initialState)
            })

            test('should render movie list div', () => {
                const movieList = findByTestAttr(wrapper, 'movie-list')
                expect(movieList.length).toBe(1)
            });

            test('should render proper movie titles', () => {
                const movieListElement = findByTestAttr(wrapper, 'Rocky 567')
                expect(movieListElement.text()).toEqual('Rocky 567')
            });

            test('should render proper movies number', () => {
                const movieList = findByTestAttr(wrapper, 'movie-list')
                const movieElements = movieList.find('li')
                expect(movieElements.length).toBe(3)
            });
        })
    })

})
