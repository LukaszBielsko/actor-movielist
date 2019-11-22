import actorReducer from '../actor';

describe('actor reducer', () => {

    const initialState = {
        actorID: null,
        actorMovies: null,
        actorInfo: null,
        actorImageURL: null
    }

    test('should return initial state when no action is passed', () => {
        const newState = actorReducer(initialState, {})       
        expect(newState).toEqual(initialState)
    });
})