import * as actionTypes from '../actions/actionTypes'


const initialState = {
    actorID: null,
    actorMovies: [],
    actorInfo: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ACTOR:
            return {
                ...state,
                actorID: action.id,
                actorInfo: action.info
            }
            default:
                return {
                    ...state
                }
    }
}

export default reducer;