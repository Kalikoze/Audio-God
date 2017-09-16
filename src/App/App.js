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

class App extends Component {
  playKey(keyCode) {
    const { trackObject, volume, isMute } = this.props
    const keys = [37, 38, 40, 39]
    let track
    keys.map((key, i) => keyCode === key ? track = trackObject[i+1] : null )
    if(track && track.gain.length) {track.stop()}
    if (track) {
      console.log(track)
        track.play({
          volume: volume[track.trackNum] || .5,
          env: {hold: isMute[track.trackNum], attack: 0, decay: 0},
        })
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
