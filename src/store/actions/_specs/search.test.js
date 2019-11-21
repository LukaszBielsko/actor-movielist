import * as actionTypes from '../actionTypes'
import * as action from '../search'


describe('actions', () => {
    test('should return clearQuery action', () => {
        const expectedAction = {
            type: actionTypes.CLEAR_QUERY
        }
        expect(action.clearQuery()).toEqual(expectedAction)
    })

    test('should return saveActorsNames action', () => {
        const input = "Tom"
        const actorsNames = ['Tom z Kóz', 'Tom Hanks', 'Tom Handy']

        const expectedAction = {
            type: actionTypes.SEARCH_QUERY,
            input,
            actorsNames
        }
        expect(action.saveActorsNames(input, actorsNames)).toEqual(expectedAction)
    });
})




const saveActorsNames = (input, actorsNames) => {
    return {
        type: actionTypes.SEARCH_QUERY,
        input,
        actorsNames
    };
    
}
