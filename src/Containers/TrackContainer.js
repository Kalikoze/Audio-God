import { connect } from 'react-redux';
import { trackObject } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    trackObject: store.trackObject
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTrackObject: (sound, trackNum) => dispatch(trackObject(sound, trackNum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
