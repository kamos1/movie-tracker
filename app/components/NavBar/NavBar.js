import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = (props) => {
  const { user, handleLogout } = props;
  return (
    <div className='navBar'>
      { userStatus(user, handleLogout) }
    </div>
  );
};

const userStatus = (user, handleLogout) => {
  const userArray = Object.keys(user);
  if (!userArray.length) {
    return (
      <div className = 'navBar'>
        <NavLink activeClassName='selected' to='/'>Home</NavLink>
        <NavLink activeClassName='selected' to='/login'>Login</NavLink>
        <NavLink activeClassName='selected' to='/signup'>Signup</NavLink>
      </div>
    );
  }

  return (
    <div className='navBar'>
        <NavLink activeClassName='selected' to='/'>
          Home
        </NavLink>

        <NavLink activeClassName='selected' to='/favorites'>
          Favorites
        </NavLink>

        <NavLink activeClassName="selected" to='/login'
                 onClick={ () => { handleLogout(); } }>
          Logout
        </NavLink>
    </div>
  );
};
