import React, { Component } from 'react';
import DisplayLoginContainer from '../Containers/DisplayLoginContainer'
import './CreateAccount.css';
import blackBackground from '../assets/black-background.jpg';

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      password: ''
    }
  }

  render() {
    const { name, username, password } = this.state;
    const { renderLogin } = this.props

    return (
      <div className='create-account-container'>
      <img className='black-background' alt='' src={blackBackground}/>
        <div className='close-button' onClick={() => renderLogin(false, false)}>X</div>
        <input className='create-name' placeholder=' Name' value={name} onChange={e => this.setState({name: e.target.value})}/>
        <input className='create-username' placeholder='  Username' value={username} onChange={e => this.setState({username: e.target.value})}/>
        <input className='create-password' placeholder='  Password'  type='password' value={password} onChange={e => this.setState({password: e.target.value})}/>
        <div className='create-button'>CREATE ACCOUNT</div>
      </div>
    )
  }
}

export default DisplayLoginContainer(CreateAccount)
