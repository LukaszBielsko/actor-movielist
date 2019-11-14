import * as actionTypes from './actionTypes';


export const actorId = (id) => {
    return {
        type: actionTypes.ACTOR_ID,
        id
    }
}  