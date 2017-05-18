import { connect } from 'react-redux';
import { CardHolder } from '../CardHolder/CardHolder';

const mapStateToProps = state => ({
  movies: state.moviesReducer,
});

export default connect(mapStateToProps, null)(CardHolder);
