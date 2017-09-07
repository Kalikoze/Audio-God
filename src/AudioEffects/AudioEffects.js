import React, { Component } from 'react';
import ControlKnob from '../ControlKnob/ControlKnob'
import './AudioEffects.css'
import AudioControlsBack from '../assets/audio-effects-background.png';

export default class AudioEffects extends Component {
  render() {
    return (
      <div className="track-controls">

        <div className='track-controls-inner-box'>
          <img className='audio-controls-backdrop' alt='' src={AudioControlsBack}/>
          <ControlKnob knobClass='control-knob1' knobType='knob-effects' ticks="tick-effects"/>
          <ControlKnob knobClass='control-knob2' knobType='knob-effects' ticks="tick-effects"/>
          <ControlKnob knobClass='control-knob3' knobType='knob-effects' ticks="tick-effects"/>
          <ControlKnob knobClass='control-knob4' knobType='knob-effects' ticks="tick-effects"/>
          <ControlKnob knobClass='control-knob5' knobType='knob-effects' ticks="tick-effects"/>
          <ControlKnob knobClass='control-knob6' knobType='knob-effects' ticks="tick-effects"/>
        </div>






      </div>
    )
  }
}
