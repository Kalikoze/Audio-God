import { connect } from 'react-redux';
import { displayLogin } from '../actions/index';

const mapStateToProps = (store) => {
  return {
    displayLogin: store.displayLogin,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderLogin: (bool1, bool2) => dispatch(displayLogin(bool1, bool2))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
