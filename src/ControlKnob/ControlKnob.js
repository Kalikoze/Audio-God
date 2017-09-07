import React, { Component } from 'react';
import './ControlKnob.css'

export default class ControlKnob extends Component {
  constructor() {
    super();
    this.state = {
      angle: 0,
      currentValue: 0,
      ticksArray: Array.from(Array(28), (e, i) => <div className='tick' key={i}></div>)
    }
  }

  moveKnob(e) {
    const { angle, activeTicks } = this.state;
    const minangle = angle - 2 >= 0 ? angle - 2 : 0;
    const maxangle = angle + 2 <= 270 ? angle + 2 : 270;

    e.nativeEvent.wheelDelta > 0 ? (this.setState({angle: maxangle}), this.setAngle()) : (this.setState({angle: minangle}), this.setAngle())
  }

  setAngle() {
    const { angle, ticksArray } = this.state;
    const activeTicks = (Math.round(angle / 10) + 1);
    const activeArray = [...ticksArray.slice(0, activeTicks).map((tick) => <div className='tick activeTick'></div>)]
    const unactiveArray = [...ticksArray.slice(0, 28 - activeTicks).map((tick) => <div className='tick'></div>)]

    this.setState({ticksArray: [...activeArray, ...unactiveArray]})
    this.setState({currentValue: Math.round((angle/270)*100)})
  }

  render() {
    const { tick, currentValue, ticksArray } = this.state;
    const { knobClass } = this.props;
    console.log(ticksArray)

    return (
      <div className={knobClass}>

        <div className="knob-surround">
        <div className='knob' onWheel={e => this.moveKnob(e)}></div>
          <span className="min">Min</span>
          <span className="max">Max</span>

          <div className="ticks">
            {ticksArray}
          </div>
        </div>
        <p>Current value: <span className="current-value">{currentValue}</span></p>
      </div>
    )
  }
}
