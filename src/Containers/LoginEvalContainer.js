import { connect } from 'react-redux';
import { createAccount, errorMessage } from '../actions/index';

const mapStateToProps = (store) => {
  return {
    loginEval: store.loginEval,
    errorMessage: store.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (user, bool) => {
      dispatch(createAccount(user, bool))
    },
    createErrorMessage: (error) => {
      dispatch(errorMessage(error))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
