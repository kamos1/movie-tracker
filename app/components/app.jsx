import { Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import MovieContainer from './containers/MovieContainer';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <Route exact path="/" render={ (loction, history, match) => {
          return (
            <MovieContainer />
          )
        }} />
      </div>
    )
  }
}
