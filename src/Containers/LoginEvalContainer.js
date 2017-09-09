import { connect } from 'react-redux';
import { createAccount } from '../actions/index';

const mapStateToProps = (store) => {
  return {
    loginEval: store.loginEval,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (user, bool, error) => {
      dispatch(createAccount(user, bool, error))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
