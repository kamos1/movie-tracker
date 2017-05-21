import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory, Route } from 'react-router';

import App from './components/app.jsx';
import rootReducer from './reducers/index';
import { loadMovies } from './actions/actions';
import PageNotFound from './components/PageNotFound/PageNotFound';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools, applyMiddleware(thunk));
store.dispatch(loadMovies());

render(
  <Provider store={ store } >
    <Router history={ browserHistory } >
      <App />
    </Router>
  </Provider>,
  document.getElementById('main'),
);
