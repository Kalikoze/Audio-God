import React, { Component } from 'react';
import './Controls.css';
import blackBackground from '../assets/black-background.jpg';
import goldButton from '../assets/goldButton.png';
import DisplayLoginContainer from '../Containers/DisplayLoginContainer'
import firebase from '../firebase';
import LoginEvalContainer from '../Containers/LoginEvalContainer'

class Controls extends Component {

  signOut() {
    const { createAccount, renderLogin, createErrorMessage } = this.props
    firebase.auth().signOut().then(function() {
      createAccount('', false)
      renderLogin(false, false);
      createErrorMessage('')

    }).catch(function(error) {
      alert('Logout failed')
    });
  }





  render() {
    const { renderLogin, createErrorMessage, loginEval } = this.props

    return (
      <div className="controls">
        <p className='controls-title'>Controls</p>
        <div className='upper-button-container'>
          <div className='login-button-container' onClick={() => (renderLogin(true, false), createErrorMessage(''))}>
            <div className={loginEval.bool? 'controls-button-glass login-glass glass-loggedIn' : 'controls-button-glass login-glass'}>
              <p className='control-button-label'>LOGIN</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
          <div className='create-button-container' onClick={() => (renderLogin(false, true), createErrorMessage(''))}>
            <div className={loginEval.bool? 'controls-button-glass create-glass glass-loggedIn' : 'controls-button-glass create-glass'}>
              <p className='control-button-label'>CREATE ACCT</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
          <div className='logOut-button-container' onClick={() => this.signOut()}>
            <div className='controls-button-glass logOut-glass'>
              <p className='control-button-label'>LOGOUT</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
        </div>
        <div className='lower-button-container'>
          <div className='upload-button-container'>
            <div className='controls-button-glass upload-glass'>
              <p className='control-button-label'>UPLOAD</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
          <div className='save-button-container'>
            <div className='controls-button-glass save-glass'>
              <p className='control-button-label'>SAVE</p>
            </div>
            <img className='gold-button-bezel' alt='' src={goldButton}/>
          </div>
          <div className='saveAs-button-container'>
            <div className='controls-button-glass saveAs-glass'>
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

export default LoginEvalContainer(DisplayLoginContainer(Controls));
