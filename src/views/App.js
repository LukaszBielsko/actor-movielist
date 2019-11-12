import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import './styles/styles.css'

import MovieCard from './components/MovieCard/MovieCard';
import AppHeader from './components/AppHeader/AppHeader';

import reducer from '../store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

function App() {
  return (
    <Provider store={store}>
      <div
        className=" p-10 m-2 h-screen border-gray-900 rounded-lg text-teal-100"
        style={{ backgroundImage:"linear-gradient( rgb(6, 9, 10),rgb(58, 91, 95) 125%" }} >
        <AppHeader />

        {/* only one comp for now - so no router at the moment */}
        {/* when more pages comps - routes and switch */}
        <MovieCard />
      </div>
    </Provider>
  );
}

export default App;
