import * as actionTypes from '../actions/actionTypes'


const initialState = {
    actorID: null,
    actorMovies: null,
    actorInfo: null,
    actorImageURL: null
}

const actorReducer = (state = initialState, action) => {
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

export default actorReducer;