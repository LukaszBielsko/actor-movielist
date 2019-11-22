/* 1. wrong assumptions here
    cant test at the momemnt as it is running async code - dont know how
    2. im actually testing reducer and action here, so integration 
 */
test('should return state with searchQuery changed to inputed value', () => {
    const newState = searchReducer(initialState, searchQuery('Arni Schwarc'))
    const search = searchQuery('Arni Schwarc')
    const expectedState = {
        searchQuery: 'Arni Schwarc',
        actorsNames: null
    }
    expect(newState).toEqual(expectedState)
});
