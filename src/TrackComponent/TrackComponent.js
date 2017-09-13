import React, { Component } from 'react';
import './TrackComponent.css';
import ControlKnob from '../ControlKnob/ControlKnob';
import Wad from 'web-audio-daw';
import goldPlate from '../assets/gold-plate.jpg';
import goldButton from '../assets/goldButton.png';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer'
import TrackContainer from '../Containers/TrackContainer'

class TrackComponent extends Component {
  playKey(e, playOnKey) {
    const { trackClass, trackObject, addSound, sounds } = this.props
    const trackNum = trackClass.slice(-1)
    if(e.code === playOnKey && trackObject[trackNum]) {
      console.log('fired')
      if(sounds) {sounds.stop()}
      const sample = new Wad({source: trackObject[trackNum]})
      sample.play()

      //Problem1: addSound is doubling the amount of times this is playing
      // addSound(sample)
    }
  }

  setTrack() {
    const { trackClass, selectedSound, setTrackObject } = this.props
    const trackNum = trackClass.slice(-1)
    if(selectedSound && selectedSound.sound) {
      setTrackObject(selectedSound.sound, trackNum)
    }
  }

  render() {
    const { trackClass, playOnKey, selectSound } = this.props
    document.documentElement.addEventListener('keydown', (e) => {
      this.playKey(e, playOnKey)
    });

    // const volumeLevel = {
    //   height: `${volume}%`
    // }

    // const trackName = sounds ? sample.source.split('/')[3].split('.')[0].slice(0, 5) : 'Empty'

    // onClick={() => selectSound(null, null)}

    //Problem2: everyTime the div is clicked, the amount of times the sound is played when event is fired is the amount of times clicked
    return (
      <div className={trackClass} onClick={() => (this.setTrack(), selectSound(null, null))}>
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
}

export default TrackContainer(SoundLibraryContainer(TrackComponent))
