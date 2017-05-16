import { movieSuccess } from '../../actions/actions';
import { connect } from 'react-redux';
import { CardHolder } from '../CardHolder/CardHolder.js';

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    key: 4
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder)
