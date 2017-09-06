import React, { Component } from 'react';
import TrackComponent from '../TrackComponent/TrackComponent';
import './Mixer.css'

export default class Mixer extends Component {
  render() {
    return (
      <div className="mixer">
        <TrackComponent />
      </div>
    )
  }
}
