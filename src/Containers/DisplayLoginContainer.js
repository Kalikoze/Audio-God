import { connect } from 'react-redux';
import { displayLogin } from '../actions/index';

const mapStateToProps = (store) => {
  return {
    displayLogin: store.displayLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderLogin: (bool) => dispatch(displayLogin(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
