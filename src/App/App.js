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



class App extends Component {
  constructor() {
    super()

    this.audioSource = null,
    this.audioC = new AudioContext()

  }


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
      // track.play(trackSettings)
      this.audioVisualizer(track, trackSettings)
      // context ? context.close().then(() => this.audioVisualizer(track, trackSettings)) : this.audioVisualizer(track, trackSettings);
    }
  }

  audioVisualizer(track, trackSettings) {



      var audio = document.getElementById("audio-holder");




      audio.src = track.source
      audio.load();
      audio.play(trackSettings);

      console.log(this.audioC)
      !this.audioSource ? this.audioSource = this.audioC.createMediaElementSource(audio) : null
      var analyser = this.audioC.createAnalyser();

      // audio.src = this.audioTrack;
      // audio.load();
      // // track.play(trackSettings);
      // audio.play(trackSettings);
      // context = new AudioContext();
      // var src = context.createMediaElementSource(audio);


      // var analyser = context.createAnalyser();

      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");

      this.audioSource.connect(analyser);
      analyser.connect(this.audioC.destination);

      analyser.fftSize = 256;

      var bufferLength = analyser.frequencyBinCount;


      var dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray)

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
          <audio id='audio-holder'>
          </audio>
      </div>
    );
  }
}

export default TrackContainer(SoundLibraryContainer(App));
