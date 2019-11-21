import searchReducer from '../search';
import { searchQuery } from '../../actions/search';

describe('reducer', () => {
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

  /* wrong assumptions here
  cant test at the momemnt as it is running async code - dont know how
  
   */
  // test('should return state with searchQuery changed to inputed value', () => {
  //   const newState = searchReducer(initialState, searchQuery('Arni Schwarc'))
  //   const search = searchQuery('Arni Schwarc')
  //   console.log(search )
  //   const expectedState = {
  //     searchQuery: 'Arni Schwarc',
  //     actorsNames: null
  //   }
  //   expect(newState).toEqual(expectedState)
  // });

}) 