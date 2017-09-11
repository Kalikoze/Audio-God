import React, { Component } from 'react';
import './TrackComponent.css';
import ControlKnob from '../ControlKnob/ControlKnob';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../ItemTypes.js';
import PropTypes from 'prop-types';
import goldPlate from '../assets/gold-plate.jpg';
import goldButton from '../assets/goldButton.png';

const audioFile = {
  drop(props) {
    console.log(props)
    return {
      sampleName: props.sampleName,
      sample: props.sample
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class TrackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: new Audio(this.props.audio),
      volume: 50
    }
  }

  playKey(e, playOnKey) {
    const { sample } = this.state
    if(e.code === playOnKey) {
      sample.pause()
      sample.currentTime = 0;
      sample.play();
    }
  }

  render() {

    const { trackClass, connectDropTarget, isOver, playOnKey} = this.props
    const { volume } = this.state
    const volumeLevel = {
      height: `${volume}%`
    }

    document.documentElement.addEventListener('keydown', (e) => {
      this.playKey(e, playOnKey)
    });



  const currentClass = {
    class: this.props.trackClass
  }

    return connectDropTarget(
      <div className={trackClass} ref={(element) => { this.something = currentClass}}>
        <div className='track-title-container'>
          <p className='track-title'>Track</p>
        </div>
        <div className='pan-container'>
          <ControlKnob knobClass="pan" knobType='pan-knob'
          ticks={"tick-pans"} valueContainer='pan-value'/>
        </div>
        <div className="volume-container">
          <img className='volume-plate' alt='' src={goldPlate}/>
          <div className="volume-control">
            <input type='range' className='fader' min='0' max='100' value={volume} onChange={e => this.setState({volume: e.target.value})} />
          </div>
          <div className="volume-display">
            <div className='volume-display-container'>
              <div className='volume-display-bar' style={volumeLevel}></div>
            </div>
          </div>
        </div>
        <div className='volume-title-container'>
          <p className='volume-title'>Volume</p>
        </div>
        <div className='lower-control-container'>
          <section className='mute-button'>
            <div className='mute-button-glass'></div>
            <p className='mute-label'>MUTE</p>
            <img className='lower-control-button-ring' alt='' src={goldButton}/>
          </section>
          <section className='track-button'>
            <div className='track-button-glass'></div>
            <p className='track-label'>EDIT</p>
            <img className='lower-control-button-ring' alt='' src={goldButton}/>
          </section>
          <div className='key-title-container'>
            <p className='key-title'>Key</p>
            <p className='key-type'>{playOnKey}</p>
          </div>
        </div>
      </div>
    )
  }
}

TrackComponent.propTypes = {
  sampleName: PropTypes.string.isRequired,
  sample: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.AUDIO, audioFile, collect)(TrackComponent);
