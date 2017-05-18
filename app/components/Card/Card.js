import React from 'react';
// import './Card.css';

export const Card = (props) => {
  const { title, synopsis, poster, user, history, handleFavorites, favorites, movies } = props;
  console.log(handleFavorites, 'in card');

  return (
    <div className="card-box">
      <img src={ poster } />

      <h2 className="movie-title">{title}</h2>

      <article className="movie-details">
        <p>{ synopsis }</p>
      </article>

      <button className="fav-btn"
              onClick={ () => {favoritesClick(user, history, handleFavorites, favorites, title, movies)} }>add <span className="title-btn">{ title }</span> to favorites</button>
    </div>
  );
};


//NOTE: Action/reducer needs to be created for adding favorited cards to favorites array
//NOTE: Move to helper folder??? Also use function from previous projects to toggle css and/or use store prop
//NOTE: SignOut button should have action/reducer to reset user back to empty object

const favoritesClick = (user, history, handleFavorites, favorites, title, movies) => {
  let userArray = Object.keys(user)
  let favKeys = Object.keys(favorites)
  console.log(movies[title]);
  if(!userArray.length) {
    history.replace('/signup')
  }

  if(favKeys.includes(title)) {
    alert('movie is already in favorites')
  } else {
    handleFavorites(movies[title])
  }


}
