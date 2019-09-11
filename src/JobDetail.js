import React, {Component} from 'react'
import {jobdetail} from './JobDetail.module.scss'
import ReactHtmlParser from 'react-html-parser'

class JobDetail extends Component {

  render(){
    const { title, location, company, description } = this.props.job
    return(
      <div className={jobdetail}>
      <p>{title}</p>
      <p>{location}</p>
      <p>{company}</p>
      <p>{ReactHtmlParser(description)}</p>
      </div>
    )
  }
}

export default JobDetail;
