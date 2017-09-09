import { combineReducers } from 'redux';
import { displayLogin, loginEval } from './reducers'

const rootReducer = combineReducers({
  displayLogin,
  loginEval
})

export default rootReducer
