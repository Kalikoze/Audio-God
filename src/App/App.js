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
    const { sounds, trackObject, volume, isMute, pan, fadeIn, selectedSound, audioEffects, selectSound } = this.props
    const keys = [37, 38, 40, 39]
    let track;

    keys.forEach((key, i) => keyCode === key ? track = trackObject[i+1] : null )

    if(sounds && sounds.gain.length) {sounds.stop()}
    if (track) {
      if(track.gain.length) {track.stop()}
      const trackSettings = {
        volume: volume[track.trackNum] || .5,
        env: {hold: isMute[track.trackNum], attack: fadeIn[track.trackNum]},
        panning: pan[track.trackNum],
        pitch: 'A5'
      }
      let timeOut = 0
      for(let i = 0; i < audioEffects[track.trackNum].Echo; i++) {
        timeOut += audioEffects[track.trackNum].Delay
        const newTrackSettings = Object.assign({}, trackSettings, {volume: audioEffects[track.trackNum].Wetness})
        setTimeout(() => track.play(newTrackSettings), timeOut)
      }
      this.audioVisualizer(track, trackSettings)
    }
  }

  makeDistortion(amount) {
  let k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;

  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }

  return curve;
};

  audioVisualizer(track, trackSettings) {
    const { audioEffects } = this.props;

    track.play(trackSettings)
    track.soundSource ? track.soundSource.playbackRate.value = audioEffects[track.trackNum].Tempo : null

    const distortion = track.destination.context.createWaveShaper()
    track.gain[0].connect(distortion)
    distortion.connect(track.destination.context.destination)
    distortion.curve = this.makeDistortion(audioEffects[track.trackNum].Distortion)


    const analyser = track.destination.context.createAnalyser();

    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    track.gain[0].connect(analyser);
    analyser.connect(track.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;

    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray)

    const width = canvas.width;
    const height = canvas.height;

    const barWidth = (width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    const renderFrame = () => {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 3;

        const r = barHeight + (25 * (i/bufferLength));
        const g = 250 * (i/bufferLength);
        const b = 50;

        ctx.fillStyle = "#109310";
        ctx.fillRect(x, height - barHeight, barWidth, barHeight);

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
