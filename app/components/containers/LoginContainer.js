import { connect } from 'react-redux';
import { userLogin } from '../../actions/actions';
import Login from '../Login/Login';

const mapStateToProps = state => ({
  users: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (email, password) => {
    dispatch(userLogin(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
