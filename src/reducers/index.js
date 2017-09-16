import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage, sounds, soundsArray, selectSound, trackObject, changeSound, mute, editTrack } from './reducers'

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
  editTrack
})

export default rootReducer
