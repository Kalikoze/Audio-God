import { connect } from 'react-redux';
import { trackObject, changeVolume, mute, removeSound, selectTrack, changePan, echo, delay, wetness, fadeIn, changeTempo, changeDistortion } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    trackObject: store.trackObject,
    volume: store.changeSound,
    isMute: store.mute,
    selectedTrack: store.selectTrack,
    pan: store.changePan,
    audioEffects: store.editAudioEffects,
    fadeIn: store.fadeIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTrackObject: (sound, trackNum) => dispatch(trackObject(sound, trackNum)),
    changeVolume: (volume,trackNum) => dispatch(changeVolume(volume, trackNum)),
    mute: (num, trackNum) => dispatch(mute(num, trackNum)),
    removeSound: (trackNum) => dispatch(removeSound(trackNum)),
    selectTrack: (trackNum) => dispatch(selectTrack(trackNum)),
    changePan: (pan, trackNum) => dispatch(changePan(pan, trackNum)),
    echo: (value, trackNum) => dispatch(echo(value, trackNum)),
    delay: (value, trackNum) => dispatch(delay(value, trackNum)),
    wetness: (value, trackNum) => dispatch(wetness(value, trackNum)),
    changeFade: (value, trackNum) => dispatch(fadeIn(value, trackNum)),
    changeTempo: (value, trackNum) => dispatch(changeTempo(value, trackNum)),
    changeDistortion: (value, trackNum) => dispatch(changeDistortion(value, trackNum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
