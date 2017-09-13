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

    selectSound(null, false)
  }


  // const volumeLevel = {
  //   height: `${volume}%`
  // }
  const trackNum = trackClass.slice(-1);
  const track = trackObject[trackNum]

  document.documentElement.addEventListener('keydown', (e) => {
    playKey(e, playOnKey)
  });

  return (
    <div className={trackClass}>
      <div className='track-title-container'>
        <div className={!track && selectedSound.bool ? 'add-track' : 'track-title-button'} onClick={() => setTrack()}>
          <p className={!track && selectedSound.bool ? 'add-track-title' : 'track-title'}>{track ? track.source.split('/')[3].split('.')[0] : 'Empty'}</p>
        </div>
      </div>
      <div className='pan-container'>
        <ControlKnob knobClass="pan" knobType='pan-knob'
        ticks={"tick-pans"} valueContainer='pan-value'/>
      </div>
      <div className="volume-container">
        <img className='volume-plate' alt='' src={goldPlate}/>
        <div className="volume-control">
          <input type='range' className='fader' min='0' max='100'/>
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
          <div className={!track ? 'track-button-glass-off' : 'track-button-glass'}></div>
          <p className='track-label'>EDIT</p>
          <img className='lower-control-button-ring' alt='' src={goldButton}/>
        </section>
        <section className='remove-button'>
          <div className={!track ? 'remove-button-glass-off' : 'remove-button-glass'}></div>
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

export default TrackContainer(SoundLibraryContainer(TrackComponent))

// <div className={!this.state.hasTrack ? 'remove-button-glass-off' : 'remove-button-glass'}></div>
