export const displayLogin = (bool1, bool2) => {
  return {
    type: 'DISPLAY_LOGIN',
    isLoginDisplayed: bool1,
    isCreateDisplayed: bool2,
  }
}

export const createAccount = (email, bool) => {
  return {
    type: 'CREATE_ACCOUNT',
    email,
    bool,
  }
}

export const errorMessage = (error) => {
  return {
    type: 'ERROR_MESSAGE',
    error
  }
}

export const sounds = (sound) => {
  return {
    type: 'SOUNDS',
    sound
  }
}

export const soundsArray = (sounds) => {
  return {
    type: 'SOUNDS_ARRAY',
    sounds
  }
}

export const selectSound = (sound, bool, name) => {
  return {
    type: 'SELECT_SOUND',
    sound,
    bool,
    name
  }
}

export const trackObject = (sound, trackNum) => {
  return {
    type: 'TRACK_OBJECT',
    sound,
    trackNum
  }
}

export const handleEvents = (eventKey) => {
  return {    
    type: 'HANDLE_EVENTS',
    eventKey
  }
}

export const changeVolume = (volume, trackNum) => {
  return {
    type: 'CHANGE_VOLUME',
    volume,
    trackNum
  }
}

export const mute = (num, trackNum) => {
  return {
    type: 'MUTE',
    num,
    trackNum
  }
}

export const removeSound = (trackNum) => {
  return {
    type: 'REMOVE_SOUND',
    trackNum
  }
}
