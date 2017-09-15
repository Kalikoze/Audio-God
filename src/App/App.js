import React, { Component } from 'react';
import Visualizer from '../Visualizer/Visualizer';
import AudioEffects from '../AudioEffects/AudioEffects';
import Mixer from '../Mixer/Mixer';
import Controls from '../Controls/Controls';
import SoundLibrary from '../SoundLibrary/SoundLibrary.js';
import './App.css'
import backgroundImage from '../assets/dark-wood.jpg';
import TrackContainer from '../Containers/TrackContainer'

class App extends Component {

  render() {
    const { handleEvents } = this.props
    return (
      <div className="App" tabIndex='0' onKeyDown={e => handleEvents(e.keyCode)}>
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

export default TrackContainer(App);
