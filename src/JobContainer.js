import React, {Component} from 'react'

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

    return(
      <div>

      </div>
    )
  }
}
