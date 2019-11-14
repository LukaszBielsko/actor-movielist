// 
import * as actionTypes from '../actions/actionTypes'


const initialState = {
    searchQuery: 'Tom Hanks',
    actorsNames: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.input,
                actorsNames: action.actorsNames

            }
        case actionTypes.CLEAR_QUERY:
            return {
                ...state,
                searchQuery: '',
                actorsNames: null
            }
        default:
            return state
    }
}

export default reducer;