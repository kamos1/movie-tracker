import React from 'react';
import { Card } from '../Card/Card';
// import './CardHolder.css';

export const CardHolder = (props) => {
  const { movies } = props;
  const moviesArray = Object.keys(movies).map(movie => (
      <Card key={ movies[movie].id } { ...movies[movie] }/>
    ));

  return (
    <div className="card-holder">
      {moviesArray}
    </div>
  );
};
