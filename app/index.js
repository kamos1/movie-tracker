import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/app';
import MovieIndex from './components/movieIndex';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import { loadMovies } from './actions/actions'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools, applyMiddleware(thunk));
store.dispatch(loadMovies())
render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('main')
);
