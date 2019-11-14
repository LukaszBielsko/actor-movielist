import * as actionTypes from './actionTypes';
import apiKey from '../../movieDBApiKey'


export const getActor = (id) => {
    return dispatch => {
        let actorInfo = fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
        let actorMovies = fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US
S`)
            .then(res => res.json())
        let actorImages = fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}`).then(res => res.json())

        Promise.all([actorInfo, actorMovies, actorImages]).then(result => {
            dispatch(saveActor(id, result[0], result[1].cast, result[2].profiles[0].file_path))
        })
    }
}


// export const getActor = (id) => {
//     return dispatch => {
//         fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`)
//             .then( res => res.json())
//             .then ( data => {
//                 console.log(data)
//                 dispatch(saveActor(id, data))
//             })
//     }
// }  

const saveActor = (id, info, movies, image) => {
    return {
        type: actionTypes.ACTOR,
        id,
        info,
        movies,
        image
    }
}

