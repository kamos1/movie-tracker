import { connect } from 'react-redux';
import { CardHolder } from '../CardHolder/CardHolder';

const mapStateToProps = state => ({
  movies: state.moviesReducer,
  user: state.userReducer
});

export default connect(mapStateToProps, null)(CardHolder);
