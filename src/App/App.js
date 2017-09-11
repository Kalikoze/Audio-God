import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Visualizer from '../Visualizer/Visualizer';
import AudioEffects from '../AudioEffects/AudioEffects';
import Mixer from '../Mixer/Mixer';
import Controls from '../Controls/Controls';
import SoundLibrary from '../SoundLibrary/SoundLibrary.js';
import './App.css'
import backgroundImage from '../assets/dark-wood.jpg'


class App extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => console.log(e.keyCode))
  }

  render() {
    return (
      <div className="App" >
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

export default DragDropContext(HTML5Backend)(App);
