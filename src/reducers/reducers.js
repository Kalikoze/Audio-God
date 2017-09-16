import Wad from 'web-audio-daw';

export const displayLogin = (state={isLoginDisplayed: false, isCreateDisplayed: false}, action) => {
  switch(action.type) {
    case 'DISPLAY_LOGIN':
      return {isLoginDisplayed: action.isLoginDisplayed, isCreateDisplayed: action.isCreateDisplayed}

    default:
      return state
  }
}

export const loginEval = (state={email: '', bool: false}, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      return {user: action.email, bool: action.bool}

    default:
      return state
  }
}

export const errorMessage = (state='', action) => {
  switch(action.type) {
    case 'ERROR_MESSAGE':
      return {error: action.error}

    default:
      return state
  }
}

export const sounds = (state=null, action) => {
  switch(action.type) {
    case 'SOUNDS':
      return action.sound

    default:
      return state
  }
}

export const soundsArray = (state=[], action) => {
  switch(action.type) {
    case 'SOUNDS_ARRAY':
      return [...action.sounds]

    default:
      return state;
  }
}

export const selectSound = (state=false, action) => {
  switch(action.type) {
    case 'SELECT_SOUND':
      return {sound: action.sound, bool: action.bool, name: action.name}


    default:
      return state;
  }
}

export const trackObject = (state={}, action) => {
  switch(action.type) {
    case 'TRACK_OBJECT':
      return Object.assign({}, state, {[action.trackNum]: Object.assign(new Wad({
        source: action.sound,
      }), {trackNum: action.trackNum})})
    case 'REMOVE_SOUND':
      return Object.assign({}, state, {[action.trackNum]: null})

    default:
      return state
  }
}

export const changeSound = (state={}, action) => {
  switch(action.type) {
    case 'CHANGE_VOLUME':
      return Object.assign({}, state, {[action.trackNum]: action.volume})

    default:
      return state
  }
}

export const changePan = (state={}, action) => {
  switch(action.type) {
    case 'CHANGE_PAN':
      return Object.assign({}, state, {[action.trackNum]: action.pan })

    default:
      return state
  }
}

const muteDefault = {
  1: 10000,
  2: 10000,
  3: 10000,
  4: 10000
}

export const mute = (state=muteDefault, action) => {
  switch(action.type) {
    case 'MUTE':
      return Object.assign({}, state, {[action.trackNum]: action.num})

    default:
      return state;
  }
}

const defaultAudioEffects = {
  1: {

  }
}

export const editTrack = (state={1: {}}, action) => {
  switch(action.type) {
    case 'EDIT_TRACK':
      return Object.assign({}, state, {[action.trackNum]: {} })

    default:
      return state;
  }
}
