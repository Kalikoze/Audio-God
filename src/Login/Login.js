import React, { Component } from 'react'
import DisplayLoginContainer from '../Containers/DisplayLoginContainer';
import blackBackground from '../assets/black-background.jpg';
import './Login.css';
import firebase from '../firebase'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  login(email, password) {
    // console.log(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

    var user = firebase.auth().currentUser;

    if (user) {
      console.log('signed in', user)
    } else {
      console.log('not signed in', user)
    }
  }

  render() {
    const { email, password } = this.state;
    const { renderLogin } = this.props

    return (
      <div className='login-container'>
        <img className='black-background' alt='' src={blackBackground}/>
        <div className='close-button' onClick={() => renderLogin(false, false)}>X</div>
        <input type='email' className='login-username' placeholder='  Email' value={email} onChange={e => this.setState({email: e.target.value})}/>
        <input className='login-password' placeholder='  Password'  type='password' value={password} onChange={e => this.setState({password: e.target.value})}/>
        <div className='login-button' onClick={() => this.login(email, password)}>Login</div>

      </div>
    )
  }
}

export default DisplayLoginContainer(Login)
