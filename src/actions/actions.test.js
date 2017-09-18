import * as actions from './index'

describe('displayLogin', () => {
  it('should pass in two bools', () => {
    const expectedAction = {
      type: 'DISPLAY_LOGIN',
      isLoginDisplayed: true,
      isCreateDisplayed: true,
    }

    expect(actions.displayLogin(true, true)).toEqual(expectedAction)
  })
})

describe('createAccount', () => {
  it('should pass in an email and bool', () => {
    const expectedAction = {
      type: 'CREATE_ACCOUNT',
      email: 'troll59910@aol.com',
      bool: true
    }

    expect(actions.createAccount('troll59910@aol.com', true)).toEqual(expectedAction)
  })
})

describe('errorMessage', () => {
  it('should return an error message', () => {
    const expectedAction = {
      type: 'ERROR_MESSAGE',
      error: 'Email and Password did not match.'
    }

    expect(actions.errorMessage('Email and Password did not match.')).toEqual(expectedAction)
  })
})

describe('sounds', () => {
  it('should pass a sound', () => {
    const expectedAction = {
      type: 'SOUNDS',
      sound: './Melodic-Samples/AgressiveViolin.wav'
    }

    expect(actions.sounds('./Melodic-Samples/AgressiveViolin.wav')).toEqual(expectedAction)
  })
})

describe('soundsArray', () => {
  it('should send an array of sounds', () => {
    const expectedAction = {
      type: 'SOUNDS_ARRAY',
      sounds: ['./Melodic-Samples/AgressiveViolin.wav', './Melodic-Samples/LostPiano.wav']
    }

    expect(actions.soundsArray(expectedAction.sounds)).toEqual(expectedAction)
  })
})

describe('selectSound', () => {
  it('should pass a sound, bool, and name', () => {
    const expectedAction = {
      type: 'SELECT_SOUND',
      sound: './Melodic-Samples/AgressiveViolin.wav',
      bool: true,
      name: 'AgressiveViolin'
    }

    expect(actions.selectSound(expectedAction.sound, true, 'AgressiveViolin')).toEqual(expectedAction)
  })
})

describe('trackObject', () => {
  it('should pass a sound and trackNum', () => {
    const expectedAction = {
      type: 'TRACK_OBJECT',
      sound: './Melodic-Samples/AgressiveViolin.wav',
      trackNum: 1
    }

    expect(actions.trackObject(expectedAction.sound, 1)).toEqual(expectedAction)
  })
})

describe('changeVolume', () => {
  it('should pass a volume and trackNum', () => {
    const expectedAction = {
      type: 'CHANGE_VOLUME',
      volume: .5,
      trackNum: 2
    }

    expect(actions.changeVolume(.5, 2)).toEqual(expectedAction)
  })
})

describe('changePan', () => {
  it('should pass in a pan value and trackNum', () => {
    const expectedAction = {
      type: 'CHANGE_PAN',
      pan: 47,
      trackNum: 4
    }

    expect(actions.changePan(47, 4)).toEqual(expectedAction)
  })
})

describe('mute', () => {
  it('should pass in a number and trackNum', () => {
    const expectedAction = {
      type: 'MUTE',
      num: 10000,
      trackNum: 2
    }

    expect(actions.mute(10000, 2)).toEqual(expectedAction)
  })
})

describe('removeSound', () => {
  it('should pass a trackNum', () => {
    const expectedAction = {
      type: 'REMOVE_SOUND',
      trackNum: 3
    }

    expect(actions.removeSound(3)).toEqual(expectedAction)
  })
})

describe('selectTrack', () => {
  it('should pass a trackNum', () => {
    const expectedAction = {
      type: 'SELECT_TRACK',
      trackNum: 1
    }

    expect(actions.selectTrack(1)).toEqual(expectedAction)
  })
})

describe('fadeIn', () => {
  it('should pass a value and trackNum', () => {
    const expectedAction = {
      type: 'FADE_IN',
      value: 42,
      trackNum: 3
    }

    expect(actions.fadeIn(42, 3)).toEqual(expectedAction)
  })
})

describe('echo', () => {
  it('should pass a value and trackNum', () => {
    const expectedAction = {
      type: 'ECHO',
      value: 3,
      trackNum: 3
    }

    expect(actions.echo(3, 3)).toEqual(expectedAction)
  })
})

describe('delay', () => {
  it('should pass a value and trackNum', () => {
    const expectedAction = {
      type: 'DELAY',
      value: 67,
      trackNum: 4
    }

    expect(actions.delay(67, 4)).toEqual(expectedAction)
  })
})

describe('wetness', () => {
  it('should pass a value and trackNum', () => {
    const expectedAction = {
      type: 'WETNESS',
      value: 23,
      trackNum: 1
    }

    expect(actions.wetness(23, 1)).toEqual(expectedAction)
  })
})
