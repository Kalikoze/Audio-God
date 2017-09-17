import React, { Component } from 'react';
import Visualizer from '../Visualizer/Visualizer';
import AudioEffects from '../AudioEffects/AudioEffects';
import Mixer from '../Mixer/Mixer';
import Controls from '../Controls/Controls';
import SoundLibrary from '../SoundLibrary/SoundLibrary.js';
import './App.css'
import backgroundImage from '../assets/dark-wood.jpg';
import TrackContainer from '../Containers/TrackContainer'
import SoundLibraryContainer from '../Containers/SoundLibraryContainer'
import { Distortion, Input, Output } from 'audio-effects';

class App extends Component {
  playKey(keyCode) {
    const { sounds, trackObject, volume, isMute, pan, fadeIn, selectedSound, audioEffects } = this.props
    const keys = [37, 38, 40, 39]
    let track
    keys.map((key, i) => keyCode === key ? track = trackObject[i+1] : null )
    if(track && track.gain.length) {track.stop()}
    if(sounds && sounds.gain.length) {sounds.stop()}
    if (track) {
      const trackSettings = {
        volume: volume[track.trackNum] || .5,
        env: {hold: isMute[track.trackNum], attack: fadeIn[track.trackNum]},
        panning: pan[track.trackNum],
      }
      let timeOut = 0
      for(let i = 0; i < audioEffects[track.trackNum].Echo; i++) {
        timeOut += audioEffects[track.trackNum].Delay
        const newTrackSettings = Object.assign({}, trackSettings, {volume: audioEffects[track.trackNum].Wetness})
        setTimeout(() => track.play(newTrackSettings), timeOut)
      }
      track.play(trackSettings)
    }
  }

  render() {
    return (
      <div className="App" tabIndex='0' onKeyDown={e => this.playKey(e.keyCode)}>
        <div className='background-container'>
          <img className='background-image' alt='' src={backgroundImage}/>
        </div>
        <div className='component-container'>
          <Visualizer />
            <div className='controls-container'>
              <div className='lower-control-left-box'>
                <AudioEffects />
                <SoundLibrary />
              </div>
              <div className='lower-control-right-box'>
                <Controls />
                <Mixer />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default TrackContainer(SoundLibraryContainer(App));
