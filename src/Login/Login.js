import React, { Component } from 'react'
import DisplayLoginContainer from '../Containers/DisplayLoginContainer';
import blackBackground from '../assets/black-background.jpg';
import './Login.css';
import firebase from '../firebase';
import LoginEvalContainer from '../Containers/LoginEvalContainer'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  login(email, password) {
    const { createAccount, createErrorMessage } = this.props;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

    });

    var user = firebase.auth().currentUser;

    user ? (createAccount(user.email, true), createErrorMessage('')) : (createAccount('', false), createErrorMessage('Invalid email or password'))
  }

  render() {
    const { email, password } = this.state;
    const { renderLogin, loginEval, errorMessage } = this.props

    return (
      <div className='login-container'>
        <img className='black-background' alt='' src={blackBackground}/>
        <div className='close-button' onClick={() => renderLogin(false, false)}>X</div>
        <p className='login-title'>USER LOGIN</p>
        {errorMessage.error ? <p className='error'>{errorMessage.error}</p> : null}
        <input type='email' className='login-username' placeholder='  USER EMAIL' value={email} onChange={e => this.setState({email: e.target.value})}/>
        <input className='login-password' placeholder='  USER PASSWORD'  type='password' value={password} onChange={e => this.setState({password: e.target.value})}/>
        <div className='login-button' onClick={() => this.login(email, password)}>SUBMIT</div>

      </div>
    )
  }
}

export default LoginEvalContainer(DisplayLoginContainer(Login))
