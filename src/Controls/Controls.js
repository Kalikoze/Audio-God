import React, { Component } from 'react';
import './Controls.css';
import blackBackground from '../assets/black-background.jpg';
import goldButton from '../assets/goldButton.png';
import DisplayLoginContainer from '../Containers/DisplayLoginContainer'

class Controls extends Component {
  render() {
    const { displayLogin, renderLogin } = this.props
    return (
      <div className="controls">
        <div className='upper-button-container'>
          <div className='login-button-container' onClick={() => displayLogin ? renderLogin(false) : renderLogin(true)}>
            <div className='controls-button-glass'>
              <p className='control-button-label'>LOGIN</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
          <div className='create-button-container'>
            <div className='controls-button-glass'>
              <p className='control-button-label'>CREATE ACCT</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
          <div className='logOut-button-container'>
            <div className='controls-button-glass'>
              <p className='control-button-label'>LOGOUT</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
        </div>
        <div className='lower-button-container'>
          <div className='upload-button-container'>
            <div className='controls-button-glass'>
              <p className='control-button-label'>UPLOAD</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
          <div className='save-button-container'>
            <div className='controls-button-glass'>
              <p className='control-button-label'>SAVE</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
          <div className='saveAs-button-container'>
            <div className='controls-button-glass'>
              <p className='control-button-label'>SAVE AS</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
        </div>
        <div className='controls-component-background'>
          <img className='black-background-controls' alt='' src={blackBackground}/>
        </div>
      </div>
    )
  }
}

export default DisplayLoginContainer(Controls);
