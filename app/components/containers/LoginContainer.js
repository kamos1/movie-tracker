import { userLogin } from '../../actions/actions'
import { connect } from 'react-redux'
import Login from '../Login/Login'

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer,
    users: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (email, password) => {
      dispatch(userLogin(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
