import React from 'react';
import Job from './Job';
import JobDetail from './JobDetail';
import Nav from './Nav'


export default class Profile extends React.Component {

  state = {
    clicked: false,
    jobShow: {}
  }

  handleClick = (jobObj) => {
    this.setState({jobShow: jobObj, clicked: true})
  }

  render(){
    const favs = this.props.favoriteJobs.map((job) => <Job job={job} key={job.id} handleClick={this.handleClick}/>)
    return(
      <div style={{margin: '1%'}}>
      <div><Nav/></div>
      <h1 style={{'fontSize': '35px'}}>Welcome {this.props.username}!</h1>
      <div style={{float: 'left', width: '30%'}}>
      {favs}
      </div>
      <div style={{float: 'right', width: '68%'}}>
      { this.state.clicked ? <JobDetail job={this.state.jobShow}/> : null }
      </div>
      <div style={{clear: 'both'}}></div>
      </div>
    )
  }
}
