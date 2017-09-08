import React, { Component } from 'react';
import './TrackComponent.css';
import ControlKnob from '../ControlKnob/ControlKnob';
import goldPlate from '../assets/gold-plate.jpg';
import goldButton from '../assets/button-ring.png';

export default class TrackComponent extends Component {
  render() {
    const { trackClass } = this.props
    return (
      <div className={trackClass}>
        <div className='pan-container'>
          <ControlKnob knobClass="pan" knobType='pan-knob'
          ticks={"tick-pans"} valueContainer='pan-value'/>
        </div>
        <div className="volume-container">
          <img className='volume-plate' alt='' src={goldPlate}/>
          <div className="volume-control">
            <input type='range' className='fader'/>
          </div>
          <div className="volume-display">
          </div>
        </div>
        <div className='lower-control-container'>
          <section className='mute-button'>
            <div className='mute-button-glass'></div>
            <p className='mute-label'>MUTE</p>
            <img className='lower-control-button-ring' alt='' src={goldButton}/>
          </section>
          <section className='track-button'>
            <div className='track-button-glass'></div>
            <p className='mute-label'>TRACK</p>
            <img className='lower-control-button-ring' alt='' src={goldButton}/>
          </section>
          <section className='key-button'>
            <div className='key-button-glass'></div>
            <p className='mute-label'>KEY</p>
            <img className='lower-control-button-ring' alt='' src={goldButton}/>
          </section>
        </div>
      </div>
    )
  }
}
