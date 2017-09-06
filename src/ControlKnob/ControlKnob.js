import React, { Component } from 'react';
import './ControlKnob.css'

export default class ControlKnob extends Component {
  constructor() {
    super();
    this.state = {
      tick: 'tick', //ClassName for ticks
      knob: 'knob', //ClassName for knobs
      angle: 0,
      currentValue: 0,
    }
  }

  moveKnob(direction) {
    const { angle } = this.state;
    const minangle = 0;
    const maxangle = 270;

    if(direction == 'up') {
      if((angle + 2) <= maxangle) {
        this.setState({angle: angle + 2});
        this.setAngle();
      }
    }

    else if(direction == 'down') {
      if((angle - 2) >= minangle) {
        this.setState({angle: angle - 2});
        this.setAngle();
      }
    }

  }

  setAngle() {
    const { angle } = this.state;
    var activeTicks = (Math.round(angle / 10) + 1);
    this.setState({tick: 'tick'})
    // $('.tick').slice(0,activeTicks).addClass('activetick');

    // update % value in text
    this.setState({currentValue: Math.round((angle/270)*100)})
  }

  // // mousewheel event - firefox
  // knob.bind('DOMMouseScroll', function(e){
  //   if(e.originalEvent.detail > 0) {
  //     moveKnob('down');
  //   } else {
  //     moveKnob('up');
  //   }
  //   return false;
  // });
  //
  // // mousewheel event - ie, safari, opera
  // knob.bind('mousewheel', function(e){
  //   if(e.originalEvent.wheelDelta < 0) {
  //     moveKnob('down');
  //   } else {
  //     moveKnob('up');
  //   }
  //   return false;
  // });

  render() {

    const { tick, knob, currentValue } = this.state;

    return (
      <div className='control-knob'>

        <div className="knob-surround">
        <div className={knob}></div>
          <span className="min">Min</span>
          <span className="max">Max</span>

          <div className="ticks">
            <div className="tick activetick"></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>
            <div className={tick}></div>

          </div>
        </div>
        <p>Current value: <span className="current-value">{currentValue}</span></p>
      </div>
    )
  }
}
