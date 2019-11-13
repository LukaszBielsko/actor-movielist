// 
import * as actionTypes from '../actions/actionTypes'


const initialState = {
    searchQuery: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.input
            }
        case actionTypes.CLEAR_QUERY:
            return {
                ...state,
                searchQuery: ''
            }
        default:
            return state
    }
}

export default reducer;