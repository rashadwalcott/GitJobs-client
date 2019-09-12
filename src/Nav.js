import React from 'react';
import {nav} from './Nav.module.scss'
import {Link} from 'react-router-dom'

export default class Nav extends React.Component {

  render(){
    return(
      <React.Fragment>
        <nav className={nav}>
          <span><Link to='/'>Home</Link> <Link to='/jobs'>Jobs</Link> <Link to='/profile'>Profile</Link>
          <button onClick={this.props.handleLogOut}>Logout</button></span>
        </nav>
      </React.Fragment>
    )
  }
}
