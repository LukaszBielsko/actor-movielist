import * as actionTypes from '../actions/actionTypes'


const initialState = {
    actorID: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ACTOR_ID:
            return {
                ...state,
                actorID: action.id,
            }
            default:
                return {
                    ...state
                }
    }
}

export default reducer;