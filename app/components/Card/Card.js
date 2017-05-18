import React from 'react';
// import './Card.css';

export const Card = (props) => {
  const { title, synopsis, poster, user, history } = props;

  return (
    <div className="card-box">
      <img src={ poster } />

      <article className="movie-details">
        <p>{ synopsis }</p>
      </article>
      <button className="fav-btn"
              onClick={ () => {favoritesClick(user, history)} }>add <span className="title-btn">{ title }</span> to favorites</button>
    </div>
  );
};


//NOTE: Action/reducer needs to be created for adding favorited cards to favorites array
//NOTE: Move to helper folder??? Also use function from previous projects to toggle css and/or use store prop
//NOTE: SignOut button should have action/reducer to reset user back to empty object

const favoritesClick = (user, history, action) => {
  let userArray = Object.keys(user)
  if(!userArray.length) {
    history.replace('/signup')
  } else {

    console.log('ADD A FAVORITES CSS PROP');
  }
}
