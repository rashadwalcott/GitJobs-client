import React, {Component} from 'react'
import {jobdetail} from './JobDetail.module.scss'

class JobDetail extends Component {

  render(){
    const { title, location, company, description } = this.props.job
    const regex = /(<([^>]+)>)/ig;
    const parsedDescription = description.replace(regex, '');
    return(
      <div className={jobdetail}>
      <p>{title}</p>
      <p>{location}</p>
      <p>{company}</p>
      <p>{parsedDescription}</p>
      </div>
    )
  }
}

export default JobDetail;
