import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage, sounds, soundsArray, selectSound, trackObject } from './reducers'

const rootReducer = combineReducers({
  displayLogin,
  loginEval,
  errorMessage,
  sounds,
  soundsArray,
  selectSound,
  trackObject
})

export default rootReducer
