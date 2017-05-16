import React from 'react';
import { Card } from '../Card/Card';

export const CardHolder = (props) => {

  const { movies } = props
  const moviesArray = Object.keys(movies).map( (movie) => {
    return (
      <Card  key={ movies[movie].id } { ...movies[movie] }/>
    )
  })

  return (
    <div>
      {moviesArray}
    </div>
  )
}
