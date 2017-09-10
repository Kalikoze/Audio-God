import React, { Component } from 'react';
import TrackComponent from '../TrackComponent/TrackComponent';
import './Mixer.css'
import blackBackground from '../assets/black-background.jpg';

export default class Mixer extends Component {
  render() {
    return (
      <div className="mixer">
        <p className='mixer-title'>Track Control</p>
        <div className='track-component-container'>
          <img className='black-background-track' alt='' src={blackBackground}/>
        </div>

        <TrackComponent trackClass={'track-component1'} />
        <TrackComponent trackClass={'track-component2'} />
        <TrackComponent trackClass={'track-component3'} />
        <TrackComponent trackClass={'track-component4'} />
      </div>
    )
  }
}
