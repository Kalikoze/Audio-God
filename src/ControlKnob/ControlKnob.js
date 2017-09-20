import React, { Component } from 'react';
import './ControlKnob.css';
import audioKnob from '../assets/audio-knob.png';
import TrackContainer from '../Containers/TrackContainer'

class ControlKnob extends Component {
  constructor(props) {
    super(props);
    const { ticks, effect, selectedTrack } = this.props
    this.state = {
      angle: this.angle(selectedTrack),
      currentValue: 0,
      ticksArray: Array.from(Array(28), (e, i) => <div className={ticks} key={i}></div>)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { audioEffects, trackNum, effect, selectedTrack } = this.props

    selectedTrack !== nextProps.selectedTrack ? this.setState({angle: this.angle(nextProps.selectedTrack)}) : null
  }

  angle(selected) {
    const {effect, audioEffects, selectedTrack, fadeIn} = this.props
    if(effect === 'Echo')  {return audioEffects[selected].Echo*67.5}
    if (effect === 'Delay') {return audioEffects[selected].Delay*10}
    if (effect === 'Wetness') {return audioEffects[selected].Wetness/100}
    if (effect === 'Fade In') {return fadeIn[selected]/20 || 0}
    if (effect === 'Tempo') {return audioEffects[selected].Tempo === 1 ? 90 : audioEffects[selected.Tempo]}
    if (effect === 'Distortion') {return audioEffects[selected].Distortion*10}
  }

  moveControlKnob(e) {
    const { angle } = this.state;
    const { effect, echo, delay, wetness, changeTempo, changeDistortion, changeFade, selectedTrack } = this.props
    const minangle = angle - 2 >= 0 ? angle - 2 : 0;
    const maxangle = angle + 2 <= 270 ? angle + 2 : 270;
    effect === 'Echo' ? echo(Math.round(angle/67.5), selectedTrack) : null
    effect === 'Delay' ? delay(Math.round(angle * 3.7), selectedTrack) : null
    effect === 'Wet' ? wetness((angle/270), selectedTrack) : null
    effect === 'Fade' ? changeFade((angle/54), selectedTrack) : null
    effect === 'Tempo' ? changeTempo(((angle/270) * 1.5) + 0.5, selectedTrack) : null
    effect === 'Dist' ? changeDistortion(Math.round((angle/270) * 1000), selectedTrack) : null

    e.nativeEvent.wheelDelta > 0 ? (this.setState({angle: maxangle}), this.setControlAngle()) : (this.setState({angle: minangle}), this.setControlAngle())
  }

  movePanKnob(e) {
    const { angle } = this.state;
    const { trackNum, changePan } = this.props
    const minangle = angle - 2 >= -100 ? angle - 2 : -100;
    const maxangle = angle + 2 <= 100 ? angle + 2 : 100;

    e.nativeEvent.wheelDelta > 0 ? this.setState({angle: maxangle}) : this.setState({angle: minangle})
    changePan(angle/100, trackNum)
  }

  setControlAngle() {
    const { angle, ticksArray } = this.state;
    const { ticks, effect } = this.props
    const activeTicks = (Math.round(angle / 10) + 1);
    const activeArray = [...ticksArray.slice(0, activeTicks).map((tick) => <div className={`${ticks} activeTick`}></div>)]
    const unactiveArray = [...ticksArray.slice(0, 28 - activeTicks).map((tick) => <div className={ticks}></div>)]

    this.setState({ticksArray: [...activeArray, ...unactiveArray]})
  }

  render() {
    const { angle, currentValue, ticksArray } = this.state;
    const { knobClass, knobType, effect, ticks, valueContainer, selectedTrack, audioEffects, pan, trackNum, fadeIn } = this.props;
    const y = angle;
    const styles = {
      transform: `rotate(${y}deg)`
    };

    // console.log(selectedTrack)

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
          <p><span className="current-value">
            {knobClass === 'pan' ? Math.round(pan[trackNum]*100) || 0 : null}
            {effect === 'Fade' ? `${Math.round(fadeIn[selectedTrack] * 20) || 0}%` : null}
            {effect === 'Echo' ? audioEffects[selectedTrack].Echo : null}
            {effect === 'Delay' ? `${Math.round(audioEffects[selectedTrack].Delay/10)}%` : null}
            {effect === 'Wet' ? `${Math.round(audioEffects[selectedTrack].Wetness*100)}%` : null}
            {effect === 'Tempo' ? `${Math.round(audioEffects[selectedTrack].Tempo * 100)}%` : null}
            {effect === 'Dist' ? `${Math.round(audioEffects[selectedTrack].Distortion / 10)}%` : null}
          </span></p>
        </div>
      </div>
    )
  }
}

export default TrackContainer(ControlKnob)
