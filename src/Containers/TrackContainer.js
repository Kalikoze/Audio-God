import { connect } from 'react-redux';
import { trackObject, changeVolume, mute, removeSound } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    trackObject: store.trackObject,
    volume: store.changeSound,
    isMute: store.mute
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTrackObject: (sound, trackNum) => dispatch(trackObject(sound, trackNum)),
    changeVolume: (volume,trackNum) => dispatch(changeVolume(volume, trackNum)),
    mute: (num, trackNum) => dispatch(mute(num, trackNum)),
    removeSound: (trackNum) => dispatch(removeSound(trackNum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
