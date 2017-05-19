import { connect } from 'react-redux';
import { userLogin, addToFavorites, removeFavorite, addAllFavorites } from '../../actions/actions';
import Login from '../Login/Login';


const mapStateToProps = state => ({
  movies: state.moviesReducer,
  users: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (email, password, id) => {
    dispatch(userLogin(email, password, id));
  },
  handleFavorites: (movie) => {
    dispatch(addToFavorites(movie));
  },
  handleAllFavorites: (movie) => {
    dispatch(addAllFavorites(movie));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
