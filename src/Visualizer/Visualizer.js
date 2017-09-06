import React, { Component } from 'react';
import './Visualizer.css';
import Speaker from '../assets/speaker2.png';

export default class Visualizer extends Component {
  render() {
    return (
      <div className="visualizer">
        <div className='left-speaker-box'>
          <img className='speaker' src={Speaker}/>
        </div>
        <div className='visualizer-box'>
        </div>
        <div className='right-speaker-box'>
          <img className='speaker' src={Speaker}/>
        </div>
      </div>
    )
  }
}
