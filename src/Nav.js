import React from 'react';
import {nav} from './Nav.module.scss'
import {Link} from 'react-router-dom'

export default class Nav extends React.Component {

  render(){
    return(
      <React.Fragment>
        <nav className={nav}>
          <p><Link to='/'>Home</Link> <Link to='/profile'>Profile</Link> <Link to='/jobs'>Jobs</Link></p>
        </nav>
      </React.Fragment>
    )
  }
}
