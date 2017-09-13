import React, { Component } from 'react';
import './TrackComponent.css';
import ControlKnob from '../ControlKnob/ControlKnob';
import goldPlate from '../assets/gold-plate.jpg';
import goldButton from '../assets/goldButton.png';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer'

class TrackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: null,
      volume: 50,
    }
  }

  playKey(e, playOnKey) {
    const { sample, context } = this.state
    if(e.code === playOnKey) {
      sample.pause()
      sample.currentTime = 0;
      sample.play();
    }
  }

  setSound()  {
    const { selectedSound, selectSound } = this.props

    if (selectedSound && selectedSound.sound) {
      this.setState({
        sample: new Audio(selectedSound.sound)
      })
    }
    selectSound(null, null)
  }

  render() {
    const { trackClass, playOnKey, selectedSound } = this.props
    const { volume, sample } = this.state
    const volumeLevel = {
      height: `${volume}%`
    }

    const trackName = sample ? sample.src.split('/')[5].split('.')[0].slice(0, 5) : 'Empty'

    document.documentElement.addEventListener('keydown', (e) => {
      this.playKey(e, playOnKey)
    });

    const currentClass = {
      class: this.props.trackClass
    }

    return (
      <div className={trackClass} onClick={() => this.setSound()} ref={(element) => { this.something = currentClass}}>
        <div className='track-title-container'>
          <p className='track-title'>{trackName}</p>
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

export default SoundLibraryContainer(TrackComponent)
