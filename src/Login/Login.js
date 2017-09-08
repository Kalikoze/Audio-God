import React, { Component } from 'react'
import DisplayLoginContainer from '../Containers/DisplayLoginContainer';
import blackBackground from '../assets/black-background.jpg';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const { username, password } = this.state;
    const { renderLogin } = this.props

    return (
      <div className='login-container'>
        <img className='black-background' alt='' src={blackBackground}/>
        <div className='close-button' onClick={() => renderLogin(false, false)}>X</div>
        <input className='login-username' placeholder='  Username' value={username} onChange={e => this.setState({username: e.target.value})}/>
        <input className='login-password' placeholder='  Password'  type='password' value={password} onChange={e => this.setState({password: e.target.value})}/>
        <div className='login-button'>Login</div>

      </div>
    )
  }
}

export default DisplayLoginContainer(Login)
