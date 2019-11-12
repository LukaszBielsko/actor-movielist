// 
import * as actionTypes from './actions';


const initialState = {
    // fetch random actor from api
    actor: 'Kijanek Rivs'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STH_STH:
            return {
                ...state,
                // dunno what to do here
            }
        case actionTypes.STH_ELSE:
            return {

            }
        default:
            return state
    }
}

export default reducer;