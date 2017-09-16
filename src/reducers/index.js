import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage, sounds, soundsArray, selectSound, trackObject, changeSound, mute, editTrack, changePan } from './reducers'

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
  editTrack,
  changePan
})

export default rootReducer
