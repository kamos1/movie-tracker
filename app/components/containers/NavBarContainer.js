import { connect } from 'react-redux';
import { NavBar } from '../NavBar/NavBar';

const mapStateToProps = state => ({
  user: state.userReducer
});

const mapDispatchToProps = dispatch => ({
  handleLogout: (user) => {
    dispatch(userLogout(user));
  },
});

export default connect(mapStateToProps, null)(NavBar);
