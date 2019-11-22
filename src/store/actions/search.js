import * as actionTypes from './actionTypes';
import {searchActorsApiURL} from '../../movieDBApi'

export const clearQuery = () => {
    return {
        type: actionTypes.CLEAR_QUERY
    }
}


export const saveActorsNames = (input, actorsNames) => {
    return {
        type: actionTypes.SEARCH_QUERY,
        input,
        actorsNames
    };
}

export const searchQuery = (input) => {
    return dispatch => {
        if (input) {
            fetch(searchActorsApiURL(input))
                .then(res => res.json())
                .then(data => {
                    const newData = data.results.filter(el => el.known_for_department === 'Acting')
                    const onlyNames = newData.map(el => {
                        return {
                            name: el.name,
                            id: el.id
                        }
                    })
                    dispatch(saveActorsNames(input, onlyNames));

                })
        } else {
            // had to do if else as i was not able to clear last letter of input
            dispatch(saveActorsNames(input, []))
        }
    }
}


