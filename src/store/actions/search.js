import * as actionTypes from '../actions/actionTypes';


export const searchQuery = (input) => {
    return {
        type: actionTypes.SEARCH_QUERY,
        input
    }
}  


export const clearQuery = () => {
    return {
        type: actionTypes.CLEAR_QUERY
    }
}  

