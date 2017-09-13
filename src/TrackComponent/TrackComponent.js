import React, { Component } from 'react';
import './TrackComponent.css';
import ControlKnob from '../ControlKnob/ControlKnob';
import Wad from 'web-audio-daw';
import goldPlate from '../assets/gold-plate.jpg';
import goldButton from '../assets/goldButton.png';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer'
import TrackContainer from '../Containers/TrackContainer'


const TrackComponent = ({trackClass, trackObject, sounds, selectedSound, setTrackObject, playOnKey, selectSound, changeVolume, volume}) => {
  function playKey(e, playOnKey) {
    const trackNum = trackClass.slice(-1);
    const track = trackObject[trackNum]
    if(e.code === playOnKey && track) {
      if(sounds) {sounds.stop()}
      if(track.gain[0]) {track.stop()}
      track.play({env: {hold: 10000}})
    }
  }

  console.log('volume', volume)

  function setTrack() {
    const trackNum = trackClass.slice(-1)
    if(selectedSound && selectedSound.sound) {
      setTrackObject(selectedSound.sound, trackNum)
    }
  }



  render() {
    const { trackClass, playOnKey, selectedSound} = this.props
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

    return (
      <div className={trackClass}  ref={(element) => { this.something = currentClass}}>
        <div className='track-title-container'>
          <div className={!this.state.hasTrack && selectedSound.bool ? 'add-track' : 'track-title-button'} onClick={() => this.setSound()}>
            <p className={!this.state.hasTrack && selectedSound.bool ? 'add-track-title' : 'track-title'}>{this.state.name}</p>
          </div>
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
          <section className='mute-button' onClick={() => this.setState({ volume: 0})}>
            <div className={volume ? 'mute-button-glass' : 'mute-button-glass mute-glass' } ></div>
            <p className='mute-label'>MUTE</p>
            <img className='lower-control-button-ring' alt='' src={goldButton}/>
          </section>
          <section className='track-button'>
            <div className={!this.state.hasTrack ? 'track-button-glass-off' : 'track-button-glass'}></div>
            <p className='track-label'>EDIT</p>
            <img className='lower-control-button-ring' alt='' src={goldButton}/>
          </section>
          <section className='remove-button' onClick={() => this.setState({ sample: null, volume: 50, name: 'ADD TRACK', hasTrack: false})}>
            <div className={!this.state.hasTrack ? 'remove-button-glass-off' : 'remove-button-glass'}></div>
            <p className='remove-label'>REMOVE</p>
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

export default TrackContainer(SoundLibraryContainer(TrackComponent))
