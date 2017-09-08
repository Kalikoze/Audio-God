import React, { Component } from 'react';
import './Visualizer.css';
import Speaker from '../assets/speaker2.png';
import blackBackground from '../assets/black-background.jpg';
import introVideo from '../assets/video1.mov';

export default class Visualizer extends Component {
  render() {
    return (
      <div className="visualizer">
        <div className='left-speaker-box'>
          <img className='speaker' alt='' src={Speaker}/>
        </div>
        <div className='visualizer-box'>
          <img className='black-background' alt='' src={blackBackground}/>
          <video poster={introVideo} className='intro-video' id="bgvid" playsInline autoPlay muted loop>
          <source src={introVideo} type="video/webm"></source>
          <source src={introVideo} type="video/mp4"></source>
      </video>
        </div>
        <div className='right-speaker-box'>
          <img className='speaker' alt='' src={Speaker}/>
        </div>
      </div>
    )
  }
}
