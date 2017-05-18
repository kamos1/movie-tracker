import { Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import MovieContainer from './containers/MovieContainer';
import LoginContainer from './containers/LoginContainer';
import CreateUser from './CreateUser/CreateUser';
import { NavBar } from './NavBar/NavBar'

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h1>Movie Watcher</h1>
        <Route exact path="/" render={ ({ history }) => (
          <MovieContainer history={history}/>
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
