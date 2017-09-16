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

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      createAccount('', false)
      createErrorMessage(error.message)
    });

    var user = firebase.auth().currentUser;

    if(user) {return (createAccount(user.email, true), createErrorMessage(''))}
  }

  render() {
    const { email, password } = this.state;
    const { renderLogin, loginEval, errorMessage } = this.props

    return (
      <div className='create-account-container'>
      <img className='black-background' alt='' src={blackBackground}/>
        <div className='close-button' onClick={() => renderLogin(false, false)}>X</div>
        <p className='create-title'>CREATE ACCOUNT</p>
        <div className='error-container'>
          {errorMessage.error ? <p className='create-error'>{errorMessage.error}</p> : null}
        </div>
        <input type='email' className='create-username' placeholder='  USER EMAIL' value={email} onChange={e => this.setState({email: e.target.value})}/>
        <input className='create-password' placeholder='  USER PASSWORD (6 CHARACTERS MIN)'  type='password' value={password} onChange={e => this.setState({password: e.target.value})}/>
        <div className='create-button' onClick={() => this.createAccount(email, password)}>CREATE ACCOUNT</div>
      </div>
    )
  }
}

export default LoginEvalContainer(DisplayLoginContainer(CreateAccount))

// {loginEval.bool ? <p>loginEval.user</p> : null}
