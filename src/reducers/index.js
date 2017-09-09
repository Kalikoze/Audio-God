import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage } from './reducers'

const rootReducer = combineReducers({
  displayLogin,
  loginEval,
  errorMessage
})

export default rootReducer
