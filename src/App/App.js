import React, { Component } from 'react';
import Visualizer from '../Visualizer/Visualizer';
import TrackControls from '../TrackControls/TrackControls';
import Mixer from '../Mixer/Mixer';
import SoundLibrary from '../SoundLibrary/SoundLibrary';
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Visualizer />
        <TrackControls />
        <Mixer />
        <SoundLibrary />
      </div>
    );
  }
}

export default App;
