import { Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import MovieContainer from './containers/MovieContainer';
import LoginContainer from './containers/LoginContainer';
import CreateUser from './CreateUser/CreateUser';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <Route exact path="/" render={ () => (
          <MovieContainer />
        )} />
        <Route exact path='/login' render={ ({ history }) => (
          <LoginContainer history={history}/>
        )} />
        <Route exact path='/signup' render={ ({ history }) => (
            <CreateUser history={history} />
          )} />
      </div>
    );
  }
}
