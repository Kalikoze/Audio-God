import React from 'react';
import './TrackComponent.css';
import ControlKnob from '../ControlKnob/ControlKnob';
import Wad from 'web-audio-daw';
import goldPlate from '../assets/gold-plate.jpg';
import goldButton from '../assets/goldButton.png';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer'
import TrackContainer from '../Containers/TrackContainer'

const TrackComponent = ({trackClass, trackObject, sounds, selectedSound, setTrackObject, playOnKey, keyName, selectSound, addSound, changeVolume, volume, isMute, mute, removeSound, selectTrack}) => {
  const trackNum = trackClass.slice(-1);
  const track = trackObject[trackNum]

  const stopSound = () => {
    if(sounds) {sounds.stop()}
    if(track && track.gain.length) {track.stop()}
  }

  const changeMute = () => {
    stopSound()
    isMute[trackNum] ? mute(0, trackNum) : mute(10000, trackNum)
  }

  const setTrack = () => {
    stopSound()
    if(selectedSound && selectedSound.sound) {
      setTrackObject(selectedSound.sound, trackNum)
    }
    selectSound(null, false)
  }

  const volumeLevel = {height: `${(volume[trackNum] * 100)}%`}

  const theVolume = (e) => {
    const volume = e / 100;
    changeVolume(volume, trackNum)
  }

  return (
    <div className={trackClass} >
      <div className='track-number-box'>
        <p className='track-number-label'>TRACK {trackNum}</p>
      </div>
      <div className='track-title-container' onClick={() => setTrack()}>
        <div className='component-track-display-box'>
          <p><span className={!track && selectedSound.bool ? "component-track-number-display component-track-number-display-selected " : "component-track-number-display " }>{track ? track.source.split('/')[3].split('.')[0].toUpperCase() : 'ADD TRACK'} </span></p>
        </div>
      </div>
      <div className='pan-container'>
        <ControlKnob knobClass="pan" trackNum={trackNum} knobType='pan-knob'
        ticks={"tick-pans"} valueContainer='pan-value'/>
      </div>
      <div className="volume-container">
        <img className='volume-plate' alt='' src={goldPlate}/>
        <div className="volume-control">
          <input  type='range' className='fader' min='0' max='100' value={(volume[trackNum] * 100)} onChange={(e) => theVolume(e.target.value)}/>
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
        <section className='mute-button' onClick={() => changeMute()}>
          <div className={isMute[trackNum] ? 'mute-button-glass' : 'mute-button-glass mute-glass'}></div>
          <p className='mute-label'>MUTE</p>
          <img className='lower-control-button-ring' alt='' src={goldButton}/>
        </section>
        <section className='track-button' onClick={() => track ? selectTrack(trackNum) : null}>
          <div className={!track ? 'track-button-glass-off' : 'track-button-glass'}></div>
          <p className='track-label'>EDIT</p>
          <img className='lower-control-button-ring' alt='' src={goldButton}/>
        </section>
        <section className='remove-button' onClick={() => (stopSound(), removeSound(trackNum))}>
          <div className={!track ? 'remove-button-glass-off' : 'remove-button-glass'}></div>
          <p className='remove-label'>REMOVE</p>
          <img className='lower-control-button-ring' alt='' src={goldButton}/>
        </section>
        <div className='key-title-container'>
          <p className='key-title'>Play</p>
          <p className='key-type'>{keyName}</p>
        </div>
      </div>
    </div>
  )
}

export default TrackContainer(SoundLibraryContainer(TrackComponent))
