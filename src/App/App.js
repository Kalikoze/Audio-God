import React, { Component } from 'react';
import Visualizer from '../Visualizer/Visualizer';
import AudioEffects from '../AudioEffects/AudioEffects';
import Mixer from '../Mixer/Mixer';
import Controls from '../Controls/Controls';
import SoundLibrary from '../SoundLibrary/SoundLibrary';
import './App.css'
import backgroundImage from '../assets/dark-wood.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='background-container'>
          <img className='background-image' src={backgroundImage}/>
        </div>
        <div className='component-container'>
          <Visualizer />
            <div className='controls'>
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

export default App;
