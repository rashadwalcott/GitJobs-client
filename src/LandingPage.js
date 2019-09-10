import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {landingpage} from './LandingPage.module.scss'
import logo from './octocat.png'

export default class LandingPage extends Component {

  render(){
    return(
      <div className={landingpage}>
      <h1>Welcome to GitJobs or Die Pryin</h1>

        <p><Link to='/signup'>Sign Up</Link> <Link to='/login'>Login</Link></p>

        <img src= {logo} alt='git rich logo' style={{height: '500px', width: '500px'}}/>

      </div>
    )
  }
}
