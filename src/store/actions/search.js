import * as actionTypes from './actionTypes';

export const clearQuery = () => {
    return {
        type: actionTypes.CLEAR_QUERY
    }
}


const saveActorsNames = (actorsNames) => {
    return {
        type: actionTypes.SEARCH_QUERY,
        actorsNames
    };
}

export const searchQuery = (input) => {
    return dispatch => {
        if (!input) return
        fetch(`https://api.themoviedb.org/3/search/person?api_key=f33ce42c7c72523f97e48160f4fdd3ae&query=${input}`)
            .then(res => res.json())
            .then(data => {
                const newData = data.results.filter(el => el.known_for_department === 'Acting')
                const onlyNames = newData.map(el => {
                    return {
                        name: el.name,
                        id: el.id
                    }
                })
                dispatch(saveActorsNames(onlyNames));
            })
    }
}




// export const searchQuery = (input) => {
//     return {
//         type: actionTypes.SEARCH_QUERY,
//         input
//     }
// }

