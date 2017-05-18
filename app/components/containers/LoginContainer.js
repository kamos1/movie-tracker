import { connect } from 'react-redux';
import { userLogin, addToFavorites, removeFavorite } from '../../actions/actions';
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
