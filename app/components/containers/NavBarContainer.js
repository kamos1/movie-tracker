import { connect } from 'react-redux';
import { NavBar } from '../NavBar/NavBar';
import { userLogout } from '../../actions/actions';

const mapStateToProps = state => ({
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: (user) => {
    dispatch(userLogout(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
