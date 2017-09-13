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

export const sounds = (state=[], action) => {
  switch(action.type) {
    case 'SOUNDS':
      return [...state, action.sound]

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

export const selectSound = (state={}, action) => {
  switch(action.type) {
    case 'SELECT_SOUND':
    return {sound: action.sound, bool: action.bool}

    default:
      return state;
  }
}
