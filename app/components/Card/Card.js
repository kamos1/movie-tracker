import React from 'react';
// import './Card.css';

export const Card = (props) => {
  const { title, synopsis, poster } = props;

  return (
    <div className="card-box">
      <img src={ poster } />
      <article className="movie-details">
        <p>{ synopsis }</p>
      </article>
      <button className="fav-btn">add <span className="title-btn">{ title }</span> to favorites</button>
    </div>
  );
};
