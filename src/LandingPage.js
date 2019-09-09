import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {landingpage} from './LandingPage.module.scss'

export default class LandingPage extends Component {

  render(){
    return(
      <div className={landingpage}>
      Welcome to GitJobs or Die Pryin'

        <div><Link to='/signup'>Signup</Link></div>
        <div><Link to='/login'>Login</Link></div>

      </div>
    )
  }
}
