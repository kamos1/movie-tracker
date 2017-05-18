import { connect } from 'react-redux';
import { CardHolder } from '../CardHolder/CardHolder';
import { addToFavorites } from '../../actions/actions';


const mapStateToProps = state => ({
  movies: state.moviesReducer,
  user: state.userReducer,
  favorites: state.favoritesReducer
});

const mapDispatchToProps = dispatch => ({
  handleFavorites: movie => {
    dispatch(addToFavorites(movie));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);
