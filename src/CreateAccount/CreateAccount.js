import React, { Component } from 'react';
import DisplayLoginContainer from '../Containers/DisplayLoginContainer'
import './CreateAccount.css';
import blackBackground from '../assets/black-background.jpg';
import firebase from '../firebase';
import LoginEvalContainer from '../Containers/LoginEvalContainer'

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  createAccount(email, password) {
    const { createAccount } = this.props;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });

    var user = firebase.auth().currentUser;

    if (user) {
      // console.log(user.email)
      createAccount('travis', true)
    } else {
      console.log('not signed in', user)
    }
  }

  render() {
    const { email, password } = this.state;
    const { renderLogin } = this.props
    console.log(this.props)

    return (
      <div className='create-account-container'>
      <img className='black-background' alt='' src={blackBackground}/>
        <div className='close-button' onClick={() => renderLogin(false, false)}>X</div>
        <input type='email' className='create-username' placeholder='  Username' value={email} onChange={e => this.setState({email: e.target.value})}/>
        <input className='create-password' placeholder='  Password'  type='password' value={password} onChange={e => this.setState({password: e.target.value})}/>
        <div className='create-button' onClick={() => this.createAccount(email, password)}>CREATE ACCOUNT</div>
      </div>
    )
  }
}

export default LoginEvalContainer(DisplayLoginContainer(CreateAccount))
