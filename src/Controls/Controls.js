import React, { Component } from 'react';
import './Controls.css';
import blackBackground from '../assets/black-background.jpg';

export default class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <div className='controls-component-background'>
          <img className='black-background-controls' src={blackBackground}/>
        </div>
      </div>
    )
  }
}
