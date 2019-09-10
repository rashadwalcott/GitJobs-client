import React, {Component} from 'react'
import {job} from './Job.module.scss'

export default class Job extends Component {

  render(){
    const { title, location, company, company_logo, description, apply } = this.props.job
    return (
      <div className={job}>
      <img src={company_logo} alt='logo'/> {title} at {company} in {location}
      </div>
    )
  }
}
