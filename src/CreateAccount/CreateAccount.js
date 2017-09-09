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
    const { createAccount, createErrorMessage } = this.props;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

    });

    var user = firebase.auth().currentUser;

    user ? (createAccount(user.email, true), createErrorMessage('')) : (createAccount('', false), createErrorMessage('Invalid email or password'))
  }

  render() {
    const { email, password } = this.state;
    const { renderLogin, loginEval, errorMessage } = this.props
    console.log(errorMessage)

    return (
      <div className='create-account-container'>
      <img className='black-background' alt='' src={blackBackground}/>
        <div className='close-button' onClick={() => renderLogin(false, false)}>X</div>
        {errorMessage.error ? <p className='error'>{errorMessage.error}</p> : null}
        <input type='email' className='create-username' placeholder='  Username' value={email} onChange={e => this.setState({email: e.target.value})}/>
        <input className='create-password' placeholder='  Password'  type='password' value={password} onChange={e => this.setState({password: e.target.value})}/>
        <div className='create-button' onClick={() => this.createAccount(email, password)}>CREATE ACCOUNT</div>
      </div>
    )
  }
}

export default LoginEvalContainer(DisplayLoginContainer(CreateAccount))

// {loginEval.bool ? <p>loginEval.user</p> : null}
