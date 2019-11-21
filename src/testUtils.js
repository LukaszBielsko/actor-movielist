import {createStore} from 'redux';

import rootReducer from './store/reducers'

export const findByTestAttr = (wrapper, selector) => {
  return wrapper.find(`[data-test='${selector}']`)
}  

export const storeFactory = (initialState) => {
  return  createStore(rootReducer, initialState)
}
