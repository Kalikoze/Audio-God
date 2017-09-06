import React, { Component } from 'react';
import ControlKnob from '../ControlKnob/ControlKnob'
import './AudioEffects.css'

export default class AudioEffects extends Component {
  render() {
    return (
      <div className="track-controls">
        Track Controls
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
