import * as actionTypes from '../actionTypes'
import * as action from '../actor'

describe('actions', () => {
    test('should create an action that saves actor', () => {
        const id = 455
        const info = "some info"
        const movies = Array(4)
        const image = 'image url here'

        const expectedAction = {
            type: actionTypes.ACTOR,
            id,
            info,
            movies,
            image
        }

        expect(action.saveActor(id, info, movies, image)).toEqual(expectedAction)

    });
})