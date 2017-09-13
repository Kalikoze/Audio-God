import { connect } from 'react-redux';
import { sounds, soundsArray, selectSound } from '../actions/index';

const mapStateToProps = (store) => {
  return {
    sounds: store.sounds,
    soundsArray: store.soundsArray,
    selectedSound: store.selectSound
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSound: (sound) => dispatch(sounds(sound)),
    changeSounds: (sounds) => dispatch(soundsArray(sounds)),
    selectSound: (sound, bool, name) => dispatch(selectSound(sound, bool, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
