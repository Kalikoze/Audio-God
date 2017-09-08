import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className='Login'>
        <input className='username' placeholder='  Username' value={username} onChange={e => this.setState({username: e.target.value})}/>
        <input className='password' placeholder='  Password'  type='password' value={password} onChange={e => this.setState({password: e.target.value})}/>
        <div className='Login'>Login</div>

      </div>
    )
  }
}
