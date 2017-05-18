import React from 'react';
// import './Card.css';

export const Card = (props) => {
  const { title, synopsis, poster, user, history, handleFavorites, handleRemove, favorites, movies } = props;

  return (
    <div className="card-box">
      <img src={ poster } />

      <h2 className="movie-title">{title}</h2>

      <article className="movie-details">
        <p>{ synopsis }</p>
      </article>

      <button className="fav-btn"
              onClick={ () => { favoritesClick(user, history, handleFavorites, handleRemove, favorites, title, movies); } }>add <span className="title-btn">{ title }</span> to favorites</button>
    </div>
  );
};

const favoritesClick = (user, history, handleFavorites, handleRemove, favorites, title, movies) => {
  const userArray = Object.keys(user);
  const favKeys = Object.keys(favorites);

  if (!userArray.length) {
    history.replace('/signup');
  } else if (favKeys.includes(title)) {
    handleRemove(movies[title]);
  } else {
    handleFavorites(movies[title]);
  }
};
