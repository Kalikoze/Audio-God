import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage, sounds, soundsArray, selectSound, trackObject, changeSound, mute, handleEvents } from './reducers'

const rootReducer = combineReducers({
  displayLogin,
  loginEval,
  errorMessage,
  sounds,
  soundsArray,
  selectSound,
  trackObject,
  changeSound,
  mute,
  handleEvents
})

export default rootReducer
