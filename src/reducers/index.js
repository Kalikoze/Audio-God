import { combineReducers } from 'redux';
import { displayLogin, loginEval, errorMessage, sounds, soundsArray, selectSound } from './reducers'

const rootReducer = combineReducers({
  displayLogin,
  loginEval,
  errorMessage,
  sounds,
  soundsArray,
  selectSound
})

export default rootReducer
