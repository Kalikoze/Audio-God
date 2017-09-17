import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage, sounds, soundsArray, selectSound, trackObject, changeSound, mute, selectTrack, changePan, editAudioEffects, fadeIn } from './reducers'

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
  selectTrack,
  changePan,
  editAudioEffects,
  fadeIn
})

export default rootReducer
