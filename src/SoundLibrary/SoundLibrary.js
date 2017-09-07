import React, { Component } from 'react';
import './SoundLibrary.css';
import blackBackground from '../assets/black-background.jpg';

export default class SoundLibrary extends Component {
  render() {
    return (
      <div className="sound-library">
        <div className='library-component-background'>
          <img className='black-background-library' src={blackBackground}/>
        </div>
      </div>
    )
  }
}
