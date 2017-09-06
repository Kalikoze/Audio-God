import React, { Component } from 'react';
import './AudioEffects.css'
import AudioControlsBack from '../assets/audio-effects-background.png';

export default class AudioEffects extends Component {
  render() {
    return (
      <div className="track-controls">
        <div className='track-controls-inner-box'>
          <img className='audio-controls-backdrop' src={AudioControlsBack}/>
        </div>

      </div>
    )
  }
}
