import * as actionTypes from './actionTypes';
import {actorImgsApiURL, actorMoviesApiURL, actorApiURL} from '../../movieDBApi'


export const getActor = (id) => {
    return dispatch => {
        let actorInfo = fetch(actorApiURL(id))
            .then(res => res.json())
        let actorMovies = fetch(actorMoviesApiURL(id))
            .then(res => res.json())
        let actorImages = fetch(actorImgsApiURL(id)).then(res => res.json())

        Promise.all([actorInfo, actorMovies, actorImages]).then(result => {
            dispatch(saveActor(id, result[0], result[1].cast, result[2].profiles[0].file_path))
        })
    }
}

export const saveActor = (id, info, movies, image) => {
    return {
        type: actionTypes.ACTOR,
        id,
        info,
        movies,
        image
    }
}

