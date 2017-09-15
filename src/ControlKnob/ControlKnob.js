import React, { Component } from 'react';
import './ControlKnob.css';
import audioKnob from '../assets/audio-knob.png';

export default class ControlKnob extends Component {
  constructor(props) {
    super(props);
    const { ticks } = this.props
    this.state = {
      angle: 0,
      currentValue: 0,
      ticksArray: Array.from(Array(28), (e, i) => <div className={ticks} key={i}></div>)
    }
  }

  moveControlKnob(e) {
    const { angle } = this.state;
    const minangle = angle - 2 >= 0 ? angle - 2 : 0;
    const maxangle = angle + 2 <= 270 ? angle + 2 : 270;

    e.nativeEvent.wheelDelta > 0 ? (this.setState({angle: maxangle}), this.setControlAngle()) : (this.setState({angle: minangle}), this.setControlAngle())
  }

  movePanKnob(e) {
    const { angle } = this.state;
    const minangle = angle - 2 >= -100 ? angle - 2 : -100;
    const maxangle = angle + 2 <= 100 ? angle + 2 : 100;

    e.nativeEvent.wheelDelta > 0 ? (this.setState({angle: maxangle}), this.setPanAngle()) : (this.setState({angle: minangle}), this.setPanAngle())
  }

  setControlAngle() {
    const { angle, ticksArray } = this.state;
    const { ticks } = this.props
    const activeTicks = (Math.round(angle / 10) + 1);

    this.setState({currentValue: Math.round((angle/270)*100)})
  }

  setPanAngle() {
    const {angle, ticksArray} = this.state
    const { ticks } = this.props
    const activeTicks = (Math.round(angle / 7.25));
    const ticksSign = Math.sign(activeTicks)
    // const activeArray = ticksSign >= 0 ? [...ticksArray.slice(0, activeTicks).map((tick) => <div className={`${ticks} activeTick`}></div>)] : [...ticksArray.slice(14, activeTicks).map((tick) => <div className={`${ticks} activeTick`}></div>)]
    // console.log(activeArray)
    // const unactiveArray = ticksSign > 0 ? [...ticksArray.slice(0, activeTicks + 14).map((tick) => <div className={ticks}></div>)] : [...ticksArray.slice(14, activeTicks).map((tick) => <div className={ticks}></div>)]
    // ticksSign >= 0 ? this.setState([...activeArray, ...unactiveArray]) : null
    // // this.setState({ticksArray: [...activeArray, ...unactiveArray]})
    this.setState({currentValue: Math.round((angle/100)*100)})
  }



  render() {
    const { angle, currentValue, ticksArray } = this.state;
    const { knobClass, knobType, effect, ticks, valueContainer } = this.props;
    const y = angle;
    const styles = {
      transform: `rotate(${y}deg)`
    };

    return (
      <div className={knobClass}>

        <div className="knob-surround">


        <div className="image" onWheel={e => knobClass.includes('control-knob') ? this.moveControlKnob(e) : this.movePanKnob(e)}>
          <img className={knobType} src={audioKnob} alt='' style={styles}/>
        {ticks === 'tick-effects' ? <p className='knob-label' style={styles}>{effect}</p> : ''}
        </div>
          {ticks === "tick-effects" ? <span className="min">Min</span> : ''}
          {ticks === "tick-effects" ? <span className="max">Max</span> : ''}
          {ticks === 'tick-pans' ? <span className='left'>L</span> : ''}
          {ticks === 'tick-pans' ? <span className='right'>R</span> : ''}


          <div className="ticks">
            {ticksArray}
          </div>
        </div>
        <div className={valueContainer}>
          <p><span className="current-value">{currentValue}</span></p>
        </div>
      </div>
    )
  }
}
