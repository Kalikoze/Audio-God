import { connect } from 'react-redux';
import { trackObject, changeVolume, mute, removeSound, selectTrack, changePan, echo, delay, wetness } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    trackObject: store.trackObject,
    volume: store.changeSound,
    isMute: store.mute,
    selectedTrack: store.selectTrack,
    pan: store.changePan,
    audioEffects: store.editAudioEffects
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
    wetness: (value, trackNum) => dispatch(wetness(value, trackNum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
