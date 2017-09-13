import { connect } from 'react-redux';
import { trackObject, changeVolume } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    trackObject: store.trackObject,
    volume: store.changeSound
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTrackObject: (sound, trackNum) => dispatch(trackObject(sound, trackNum))
    changeVolume: (volume) => dispatch(changeVolume(volume))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
