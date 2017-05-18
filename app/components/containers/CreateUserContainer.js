import { connect } from 'react-redux';
import { createUser } from '../../actions/actions';

const mapStateToProps = state => ({
  users: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  handleCreateUser: (user) => {
    dispatch(createUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
