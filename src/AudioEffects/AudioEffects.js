import React, { Component } from 'react';
import ControlKnob from '../ControlKnob/ControlKnob'
import './AudioEffects.css'
import AudioControlsBack from '../assets/audio-effects-background.png';
import scale from '../assets/scale.png';
import TrackContainer from '../Containers/TrackContainer'

class AudioEffects extends Component {

  render() {

    const { selectedTrack } = this.props
    console.log(selectedTrack)
    return (
      <div className="track-controls">

        <div className='track-controls-inner-box'>
          <p className='audio-controls-title'>Audio Controls</p>
          <div className='track-display-box'>
            <p><span className="track-number-display">EDIT TRACK: 1</span></p>
          </div>


          <img className='audio-controls-backdrop' alt='' src={AudioControlsBack}/>
          <img className='scale' alt='' src={scale}/>
          <div className='scale-backdrop'></div>
          <ControlKnob knobClass='control-knob1' knobType='knob-effects' ticks="tick-effects"
          effect='Reverb' valueContainer='effects-value'/>
          <ControlKnob knobClass='control-knob2' knobType='knob-effects' ticks="tick-effects"
          effect='Echo' valueContainer='effects-value'/>
          <ControlKnob knobClass='control-knob3' knobType='knob-effects' ticks="tick-effects"
          effect='Distortion' valueContainer='effects-value'/>
          <ControlKnob knobClass='control-knob4' knobType='knob-effects' ticks="tick-effects"
          effect='Thing' valueContainer='effects-value'/>
          <ControlKnob knobClass='control-knob5' knobType='knob-effects' ticks="tick-effects"
          effect='Thing' valueContainer='effects-value'/>
          <ControlKnob knobClass='control-knob6' knobType='knob-effects' ticks="tick-effects"
          effect='Thing' valueContainer='effects-value'/>
        </div>






      </div>
    )
  }
}


export default TrackContainer(AudioEffects)
