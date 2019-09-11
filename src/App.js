import React, {Component} from 'react';
import './App.css';
import LandingPage from './LandingPage'
import JobContainer from './JobContainer'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {

  state = {
    username: ''
  }

  componentDidMount(){
    if(localStorage.token){
      this.getProfile()
    } else {
      this.props.history.push('/')
    }
  }

  getProfile = () => {
    fetch('http://localhost:3000/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(user => this.setState({username: user.username}))
  }

  render(){
    console.log(this.state);
    return (
      <Switch>
            <Route
              path={'/jobs'}
              render={routerProps => <JobContainer  {...routerProps} username={this.state.username}/>} />
            <Route path={'/login'} render={routerProps => <Login {...routerProps} getProfile={this.getProfile} />}/>
            <Route path={'/signup'} render={routerProps => <Signup {...routerProps} getProfile={this.getProfile} />}/>
            <Route path={'/profile'} render={routerProps => <Profile {...routerProps} username={this.state.username}/>} />
            <Route exact path={'/'} component={LandingPage} />
        {/* ternary for when they are logged in this renders the job JobContainer */}
      </Switch>
    )
  }
}

export default withRouter (App);
