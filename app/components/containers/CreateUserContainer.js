import { createUser } from '../../actions/actions'
import { connect } from 'react-redux'
import CreateUser from '../CreateUser/CreateUser'
const mapStateToProps = (state) => {
  return {
    users: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => {
      dispatch(createUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
