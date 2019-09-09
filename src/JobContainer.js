import React, {Component} from 'react'
import Job from './Job'

export default class JobContainer extends Component {

  state = {
    jobs: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(jobs => {this.setState({jobs})})
  }

  render(){
    const jobs = this.state.jobs.map((job) => <Job job={job} key={job.id}/>)
    return(
      <div>
      {jobs}
      </div>
    )
  }
}
