import React from 'react'

export default class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.token = data.token
        this.props.history.push('/jobs')
      }
    })
  }
  render () {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Username:
          <input onChange={this.handleChange} value={this.state.username} type='text' name='username' />
          </label>
          <label> Password:
          <input onChange={this.handleChange} value={this.state.password} type='password' name='password' />
          </label>
          <input type='submit' value='Log in'/>
        </form>
      </div>
    )
  }
}
