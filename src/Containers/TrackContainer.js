import { connect } from 'react-redux';
import { trackObject, changeVolume, mute, removeSound, handleEvents } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    trackObject: store.trackObject,
    volume: store.changeSound,
    isMute: store.mute,
    eventNum: store.handleEvents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTrackObject: (sound, trackNum) => dispatch(trackObject(sound, trackNum)),
    changeVolume: (volume,trackNum) => dispatch(changeVolume(volume, trackNum)),
    mute: (num, trackNum) => dispatch(mute(num, trackNum)),
    removeSound: (trackNum) => dispatch(removeSound(trackNum)),
    handleEvents: (eventKey) => dispatch(handleEvents(eventKey))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)
