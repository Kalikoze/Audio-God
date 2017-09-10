import { connect } from 'react-redux';
import { sounds, soundsArray } from '../actions/index';

const mapStateToProps = (store) => {
  return {
    sounds: store.sounds,
    soundsArray: store.soundsArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSound: (sound) => dispatch(sounds(sound)),
    changeSounds: (sounds) => dispatch(soundsArray(sounds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
