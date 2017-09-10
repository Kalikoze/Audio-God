import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage, sounds, soundsArray } from './reducers'

const rootReducer = combineReducers({
  displayLogin,
  loginEval,
  errorMessage,
  sounds,
  soundsArray
})

export default rootReducer
