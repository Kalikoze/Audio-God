import React from 'react';
import Wad from 'web-audio-daw';
import './SoundLibrary.css';
import blackBackground from '../assets/black-background.jpg';
import melodicSamples from '../Melodic-Samples/index';
import drumSamples from '../Drum-Samples/index';
import SoundLibraryContainer from '../Containers/SoundLibraryContainer';
import TrackContainer from '../Containers/TrackContainer'

const SoundLibrary = ({sounds, soundsArray, changeSounds, selectSound, selectedSound, addSound, trackObject}) => {
  const playSound = (sample) => {
    const trackKeys = Object.keys(trackObject)
    trackKeys.map(track => {
      const sound = trackObject[track];
      if(sound && sound.gain.length) {sound.stop()}
    })
    if(sounds) {sounds.stop()}
    var audio = new Wad({source: sample});
    audio.play({
      volume: .5,
      env: {hold: 10000}
    });
    addSound(audio)
  }

  const samples = soundsArray.map((sample, i) => {
    const sampleName = sample.split('/')[3].split('.')[0]
    return (
      <div className='sound-container' key={i} onClick={() => (playSound(sample), selectSound(sample, true, sampleName))}>
        <p className={selectedSound.name === sampleName ? 'sound sound-selected' : 'sound'}>{sampleName}</p>
      </div>
    )
  })

  console.log(selectedSound)

  return (
    <div className="sound-library">
      <p className='library-title'>Track Library</p>
      <div className='library-track-display-box'>
        <p><span className="library-track-number-display">{selectedSound.bool ? 'SELECTED TRACK: ' + selectedSound.name.toUpperCase() : 'NO TRACK SELECTED'}</span></p>
      </div>

      <div className='library-component-background'>

        <img className='black-background-library' alt='' src={blackBackground}/>
        <div className={soundsArray.length === 16 ? 'melodic-samples melodic-samples-selected' : 'melodic-samples'} onClick={() => changeSounds(melodicSamples)}>Melodic Samples</div>
        <div className={soundsArray.length === 27 ? 'drum-samples drum-samples-selected' : 'drum-samples'} onClick={() => changeSounds(drumSamples)}>Drum Samples</div>
        <div className='sounds'>
          <ul id="playlist">
            {samples}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TrackContainer(SoundLibraryContainer(SoundLibrary))
