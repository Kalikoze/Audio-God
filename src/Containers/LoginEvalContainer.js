import { connect } from 'react-redux';
import { createAccount } from '../actions/index';

const mapStateToProps = (store) => {
  return {
    loginEval: store.loginEval,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (user, bool) => {
      console.log(user, bool)
      dispatch(createAccount(user, bool))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
