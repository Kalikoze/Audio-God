import React, { Component } from 'react';
import ControlKnob from '../ControlKnob/ControlKnob'
import './AudioEffects.css'
import AudioControlsBack from '../assets/audio-effects-background.png';

export default class AudioEffects extends Component {
  render() {
    return (
      <div className="track-controls">

        <div className='track-controls-inner-box'>
          <img className='audio-controls-backdrop' src={AudioControlsBack}/>
        </div>


        <ControlKnob />
        <ControlKnob />
        <ControlKnob />
        <ControlKnob />
        <ControlKnob />
        <ControlKnob />

      </div>
    )
  }
}
