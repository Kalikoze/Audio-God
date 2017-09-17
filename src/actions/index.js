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

export const changeVolume = (volume, trackNum) => {
  return {
    type: 'CHANGE_VOLUME',
    volume,
    trackNum
  }
}

export const changePan = (pan, trackNum) => {
  return {
    type: 'CHANGE_PAN',
    pan,
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

export const selectTrack = (trackNum) => {
  return {
    type: 'SELECT_TRACK',
    trackNum
  }
}

export const echo = (value, trackNum) => {
  return {
    type: 'ECHO',
    value,
    trackNum
  }
}

export const delay = (value, trackNum) => {
  return {
    type: 'DELAY',
    value,
    trackNum
  }
}

export const wetness = (value, trackNum) => {
  return {
    type: 'WETNESS',
    value,
    trackNum
  }
}
