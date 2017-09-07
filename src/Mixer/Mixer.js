import React, { Component } from 'react';
import TrackComponent from '../TrackComponent/TrackComponent';
import './Mixer.css'
import blackBackground from '../assets/black-background.jpg';

export default class Mixer extends Component {
  render() {
    return (
      <div className="mixer">
        <div className='track-component-background'>
          <img className='black-background-track' src={blackBackground}/>
        </div>

        <TrackComponent />
      </div>
    )
  }
}
