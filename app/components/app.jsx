import { Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import MovieContainer from './containers/MovieContainer';
import LoginContainer from './containers/LoginContainer';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <Route exact path="/" render={ (location, history, match) => {
          return (
            <MovieContainer />
          )
        }} />
        <Route exact path='/login' render={ (location, history, match) => {
          return (
            <LoginContainer />
          )
        }} />
      </div>
    )
  }
}
