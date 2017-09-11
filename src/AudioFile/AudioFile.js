import React, { Component } from 'react';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer'
import './AudioFile.css';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../ItemTypes.js';
import { moveAudioSrc } from '../TrackComponent/TrackComponent';

const audioSource = {
  beginDrag(props) {
    console.log(props);
   const audioSrc = { sampleName: props.sampleName, sample: props.sample };
   return audioSrc;

 },

  endDrag(props, monitor, component) {

    if (!monitor.didDrop()) {
      return;
    }


    // When dropped on a compatible target, do something
    const audioSrc = monitor.getItem();
    const dropResult = monitor.getDropResult();
    // console.log(component)

  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const propTypes = {
  sampleName: PropTypes.string.isRequired,
  sample: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

class AudioFile extends Component {
  playSound(sample) {
    const { sounds, addSound } = this.props
    sounds.forEach(sound => sound.pause())
    var audio = new Audio(sample);
    audio.currentTime = 0;
    audio.play();
    addSound(audio)
  }

  render() {
    const dragStyle = {
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move'
    }
    const { sample, sampleName, connectDragSource, isDragging } = this.props
    return connectDragSource(
      <div style={dragStyle} className="sound-container" onClick={() => this.playSound(sample)}>
        <span className="sound">{sampleName}</span>
      </div>
    )
  }
}

AudioFile.propTypes = propTypes;

export default SoundLibraryContainer(DragSource(ItemTypes.AUDIO, audioSource, collect)(AudioFile));
