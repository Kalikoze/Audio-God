import React, { Component } from 'react';
import './TrackComponent.css';
import ControlKnob from '../ControlKnob/ControlKnob';
import Wad from 'web-audio-daw';
import goldPlate from '../assets/gold-plate.jpg';
import goldButton from '../assets/goldButton.png';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer'
import TrackContainer from '../Containers/TrackContainer'

const TrackComponent = ({trackClass, trackObject, sounds, selectedSound, setTrackObject, playOnKey, selectSound}) => {
  function playKey(e, playOnKey) {
    const trackNum = trackClass.slice(-1);
    const track = trackObject[trackNum]
    if(e.code === playOnKey && track) {
      if(sounds) {sounds.stop()}
      if(track.gain[0]) {track.stop()}
      track.play({env: {hold: 10000}})
    }
  }

  function setTrack() {
    const trackNum = trackClass.slice(-1)
    if(selectedSound && selectedSound.sound) {
      setTrackObject(selectedSound.sound, trackNum)
    }
  }

  document.documentElement.addEventListener('keydown', (e) => {
    playKey(e, playOnKey)
  });

  return (
    <div className={trackClass} onClick={() => (setTrack(), selectSound(null, null))}>
    <div className='track-title-container'>
    <p className='track-title'>{'Empty'}</p>
    </div>
    <div className='pan-container'>
    <ControlKnob knobClass="pan" knobType='pan-knob'
    ticks={"tick-pans"} valueContainer='pan-value'/>
    </div>
    <div className="volume-container">
    <img className='volume-plate' alt='' src={goldPlate}/>
    <div className="volume-control">
    <input type='range' className='fader' min='0' max='100' />
    </div>
    <div className="volume-display">
    <div className='volume-display-container'>
    <div className='volume-display-bar'></div>
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

export default TrackContainer(SoundLibraryContainer(TrackComponent))
