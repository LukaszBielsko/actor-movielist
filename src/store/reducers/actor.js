import * as actionTypes from '../actions/actionTypes'


const initialState = {
    actorID: null,
    actorMovies: [],
    actorInfo: null,
    actorImageURL: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ACTOR:
            return {
                ...state,
                actorID: action.id,
                actorInfo: action.info,
                actorMovies: action.movies,
                actorImageURL: action.image
            }
            default:
                return {
                    ...state
                }
    }
}

export default reducer;