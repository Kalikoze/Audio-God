import React, { Component } from 'react';
import Visualizer from '../Visualizer/Visualizer';
import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';
import AudioEffects from '../AudioEffects/AudioEffects';
import Mixer from '../Mixer/Mixer';
import Controls from '../Controls/Controls';
import SoundLibrary from '../SoundLibrary/SoundLibrary.js';
import './App.css'
import backgroundImage from '../assets/dark-wood.jpg';
import TrackContainer from '../Containers/TrackContainer'
import SoundLibraryContainer from '../Containers/SoundLibraryContainer'
import { Distortion, Input, Output } from 'audio-effects';
let context;
let src

class App extends Component {
  playKey(keyCode) {
    const { sounds, trackObject, volume, isMute, pan, selectedSound } = this.props
    const keys = [37, 38, 40, 39]
    let track
    keys.map((key, i) => keyCode === key ? track = trackObject[i+1] : null )
    if(track && track.gain.length) {track.stop()}
    if(sounds && sounds.gain.length) {sounds.stop()}
    if (track) {
      track.play({
        volume: volume[track.trackNum] || .5,
        env: {hold: isMute[track.trackNum]},
        panning: pan[track.trackNum],
      })
      this.audioVisualizer(track)
    }
  }

  audioVisualizer(track) {
      src = null;

      var file = track.source;
      var audio = document.getElementById("audio");

      audio.src = file;
      audio.load();
      audio.play();
      context = new AudioContext();
      src = context.createMediaElementSource(audio);
      var analyser = context.createAnalyser();

      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");

      src.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 256;

      var bufferLength = analyser.frequencyBinCount;
      console.log(bufferLength);

      var dataArray = new Uint8Array(bufferLength);

      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;

      var barWidth = (WIDTH / bufferLength) * 2.5;
      var barHeight;
      var x = 0;

      function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] * 3;

          var r = barHeight + (25 * (i/bufferLength));
          var g = 250 * (i/bufferLength);
          var b = 50;

          ctx.fillStyle = "#109310";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 1;
        }
      }

      renderFrame();

  };


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
