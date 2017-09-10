import React, { Component } from 'react';
import './SoundLibrary.css';
import blackBackground from '../assets/black-background.jpg';
import melodicSamples from '../Melodic-Samples/index';
import drumSamples from '../Drum-Samples/index';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer';
import AudioFile from '../AudioFile/AudioFile'

class SoundLibrary extends Component {
  render() {
    const {soundsArray, changeSounds} = this.props
    const samples = soundsArray.map((sample, i) => {
      const sampleName = sample.split('/')[3].split('.')[0]
      return <AudioFile key={i} sample={sample} sampleName={sampleName}/>
    })

    return (
      <div className="sound-library">
        <p className='library-title'>Library</p>
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
