import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage, sounds, soundsArray, selectSound, trackObject, changeSound, mute, selectTrack, changePan, editAudioEffects } from './reducers'

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
  editAudioEffects
})

export default rootReducer
