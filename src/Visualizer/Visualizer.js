import React, { Component } from 'react';
import './Visualizer.css';
import Speaker from '../assets/speaker2.png';
import SpeakerCone from '../assets/speaker-cone.png';
import blackBackground from '../assets/black-background.jpg';
import introVideo from '../assets/video1.mp4';
import logo from '../assets/AUDIO-GOD.png';

export default class Visualizer extends Component {
  render() {
    return (
      <div className="visualizer">
        <div className='left-speaker-box'>
          <img className='speaker' alt='' src={Speaker}/>
          <img className='speaker-inner-cone' alt='' src={SpeakerCone}/>
        </div>
        <div className='visualizer-box'>
          <img className='black-background' alt='' src={blackBackground}/>
          <img className='logo' alt='' src={logo}/>
          <video poster={introVideo} className='intro-video' id="bgvid" playsInline autoPlay>
          <source src={introVideo} type="video/webm"></source>
          <source src={introVideo} type="video/mp4"></source>
      </video>
        </div>
        <div className='right-speaker-box'>
          <img className='speaker' alt='' src={Speaker}/>
          <img className='speaker-inner-cone' alt='' src={SpeakerCone}/>
        </div>
      </div>
    )
  }
}
