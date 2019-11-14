import * as actionTypes from './actionTypes';
import apiKey from '../../movieDBApiKey'


export const getActor = (id) => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`)
            .then( res => res.json())
            .then ( data => {
                console.log(data)
                dispatch(saveActor(id, data))
            })
    }
}  

const saveActor = (id, info) => {
    return {
        type: actionTypes.ACTOR,
        id,
        info
    }
}  

