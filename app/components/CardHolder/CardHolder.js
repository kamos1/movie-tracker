import React from 'react';
import { Card } from '../Card/Card';
// import './CardHolder.css';

export const CardHolder = (props) => {
  const { movies, user, history } = props;
  const moviesArray = Object.keys(movies).map(movie => (
      <Card key={ movies[movie].id } history={ history } user={ user } { ...movies[movie] }/>
    ));

  return (
    <div className="card-holder">
      {moviesArray}
    </div>
  );
};
