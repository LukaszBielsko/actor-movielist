import searchReducer from '../search';

describe('search reducer', () => {
  const initialState = {
    searchQuery: 'Tom Hanks',
    actorsNames: null
  }

  test('should return initial state when no action is passed', () => {
    // can pass empty object to reducer too 
    // const fakeAction = {
    //   type: null
    // }
    const newState = searchReducer(initialState, {})
    expect(newState).toEqual(initialState)
  });

})