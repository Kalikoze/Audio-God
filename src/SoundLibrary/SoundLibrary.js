import React, { Component } from 'react';
import Wad from 'web-audio-daw';
import './SoundLibrary.css';
import blackBackground from '../assets/black-background.jpg';
import melodicSamples from '../Melodic-Samples/index';
import drumSamples from '../Drum-Samples/index';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer';

class SoundLibrary extends Component {
  playSound(sample) {
    const { sounds, addSound } = this.props
    if(sounds) {sounds.stop()}
    var audio = new Wad({source: sample});
    audio.play();
    addSound(audio)
  }

  render() {
    const {soundsArray, changeSounds, selectSound, selectedSound} = this.props

    const samples = soundsArray.map((sample, i) => {
      const sampleName = sample.split('/')[3].split('.')[0]
      return (
        <div className='sound-container' key={i} onClick={() => (this.playSound(sample), selectSound(sample, true, sampleName))}>
          <span className='sound'>{sampleName}</span>
        </div>
      )
    })

    return (
      <div className="sound-library">
        <p className='library-title'>Library</p>
        <div className='selected-title-box'>
          <p className='selected-title'>{selectedSound.bool ? selectedSound.name : null}</p>
        </div>
        <div className='library-component-background'>

          <img className='black-background-library' alt='' src={blackBackground}/>
          <div className='melodic-samples' onClick={() => changeSounds(melodicSamples)}>Melodic Samples</div>
          <div className='drum-samples' onClick={() => changeSounds(drumSamples)}>Drum Samples</div>
          <div className='sounds'>
            <ul id="playlist">
              {samples}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SoundLibraryContainer(SoundLibrary)
