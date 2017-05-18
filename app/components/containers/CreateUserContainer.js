import { createUser } from '../../actions/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    users: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCreateUser: (user) => {
      dispatch(createUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
