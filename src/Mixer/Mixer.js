import React from 'react';
import TrackComponent from '../TrackComponent/TrackComponent';
import './Mixer.css'
import blackBackground from '../assets/black-background.jpg';

const Mixer = () => {
  return (
    <div className="mixer">
      <p className='mixer-title'>Track Control</p>
      <div className='track-component-container'>
        <img className='black-background-track' alt='' src={blackBackground}/>
      </div>

      <TrackComponent trackClass={'track-component1'}
        audio={"/static/media/NuFunkCello.7dca3fb5.wav"}
        playOnKey={37}
        keyName={'ArrowLeft'}/>
      <TrackComponent trackClass={'track-component2'}
        audio={"/static/media/Kick3.51983f5b.wav"}
        playOnKey={38}
        keyName={'ArrowUp'}/>
      <TrackComponent trackClass={'track-component3'}
        audio={"/static/media/Snare2.f644d349.wav"}
        playOnKey={40}
        keyName={'ArrowDown'}/>
      <TrackComponent trackClass={'track-component4'}
        audio={"/static/media/Closed-Hi-Hat1.1be04c81.wav"}
        playOnKey={39}
        keyName={'ArrowRight'}/>
    </div>
  )
}

export default Mixer
