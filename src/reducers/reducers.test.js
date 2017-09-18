import * as reducers from './reducers';

describe('displayLogin', () => {
  it('should have a default state', () => {
    expect(reducers.displayLogin(undefined, {})).toEqual({isLoginDisplayed: false, isCreateDisplayed: false})
  })

  it('should give an object with two bools', () => {
    const displayLogin = {
      type: 'DISPLAY_LOGIN',
      isLoginDisplayed: true,
      isCreateDisplayed: true
    }

    const expectedReducer = {
      isLoginDisplayed: true,
      isCreateDisplayed: true
    }

    expect(reducers.displayLogin(undefined, displayLogin)).toEqual(expectedReducer)
  })
})

describe('loginEval', () => {
  it('should have a default state', () => {
    expect(reducers.loginEval(undefined, {})).toEqual({email: '', bool:false})
  })

  it('should give an object with an email and bool', () => {
    const loginEval = {
      type: 'CREATE_ACCOUNT',
      email: 'troll59910@aol.com',
      bool: true
    }

    const expectedReducer = {
      user: 'troll59910@aol.com',
      bool: true
    }

    expect(reducers.loginEval(undefined, loginEval)).toEqual(expectedReducer)
  })
})

describe('errorMessage', () => {
  it('should have a default state', () => {
    expect(reducers.errorMessage(undefined, {})).toEqual('')
  })

  it('should pass in an error', () => {
    const errorMessage = {
      type: 'ERROR_MESSAGE',
      error: 'Username and Password do not match'
    }

    expect(reducers.errorMessage(undefined, errorMessage)).toEqual({error: 'Username and Password do not match'})
  })
})

describe('sounds', () => {
  it('should have a default state', () => {
    expect(reducers.sounds(undefined, '')).toEqual(null);
  })

  it('should pass in a sound', () => {
    const sounds = {
      type: 'SOUNDS',
      sound: './Melodic-Samples/BravePiano.wav'
    }

    expect(reducers.sounds(undefined, sounds)).toEqual('./Melodic-Samples/BravePiano.wav')
  })
})

describe('soundsArray', () => {
  it('should have a default state', () => {
    expect(reducers.soundsArray(undefined, [])).toEqual([])
  })

  it('should pass in an array of sounds', () => {
    const soundsArray = {
      type: 'SOUNDS_ARRAY',
      sounds: ['./Melodic-Samples/BravePiano.wav', './Melodic-Samples/OldFunk.wav']
    }

    expect(reducers.soundsArray(undefined, soundsArray)).toEqual(soundsArray.sounds)

    expect(reducers.soundsArray(undefined, soundsArray).length).toEqual(2)
  })
})

describe('selectSound', () => {
  it('should have a default state', () => {
    expect(reducers.selectSound(undefined, {})).toEqual(false)
  })

  it('should pass in an object with a sound, bool, and name', () => {
    const selectSound = {
      type: 'SELECT_SOUND',
      sound: './Melodic-Samples/Dark.wav',
      bool: true,
      name: 'Dark'
    }

    const expectedReducer = {
      sound: './Melodic-Samples/Dark.wav',
      bool: true,
      name: 'Dark'
    }

    expect(reducers.selectSound(undefined, selectSound)).toEqual(expectedReducer)
  })
})

describe('changeSound', () => {
  it('should have a default state', () => {
    expect(reducers.changeSound(undefined, {})).toEqual({})
  })

  it('should create a new object', () => {
    const changeSound = {
      type: 'CHANGE_VOLUME',
      trackNum: 2,
      volume: .47
    }

    const expectedReducer = {
      2: .47
    }

    expect(reducers.changeSound(undefined, changeSound)).toEqual(expectedReducer)
  })
})
