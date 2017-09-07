import React, { Component } from 'react';
import './Visualizer.css';
import Speaker from '../assets/speaker2.png';
import blackBackground from '../assets/black-background.jpg';

export default class Visualizer extends Component {
  render() {
    return (
      <div className="visualizer">
        <div className='left-speaker-box'>
          <img className='speaker' src={Speaker}/>
        </div>
        <div className='visualizer-box'>
          <img className='black-background' src={blackBackground}/>
        </div>
        <div className='right-speaker-box'>
          <img className='speaker' src={Speaker}/>
        </div>
      </div>
    )
  }
}
