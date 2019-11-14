import {combineReducers} from 'redux';

import searchReducer from './search'
import actorReducer from './actor';


const rootReducer = combineReducers({
    search: searchReducer,
    actor: actorReducer
})

export default rootReducer;