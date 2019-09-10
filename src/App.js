import React, {Component} from 'react';
import './App.css';
import LandingPage from './LandingPage'
import JobContainer from './JobContainer'
import Login from './Login'
import Signup from './Signup'
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {

  state = {
    username: ''
  }

  componentDidMount(){
    if(localStorage.token){
      fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(user => this.setState({username: user.username}))
    } else {
      //change line 26 to push to landingpage
      this.props.history.push('/login')
    }
  }

  render(){
    return (
      <Switch>
            <Route
              path={'/jobs'}
              render={routerProps => <JobContainer  {...routerProps} username={this.state.username}/>} />
            <Route path={'/login'} component={Login} />
            <Route path={'/signup'} component={Signup} />
            <Route exact path={'/'} component={LandingPage} />
        {/* ternary for when they are logged in this renders the job JobContainer */}
      </Switch>
    )
  }
}

export default withRouter (App);
