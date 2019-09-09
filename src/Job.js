import React, {Component} from 'react'

export default class Job extends Component {

  render(){
    const { title, location, company, company_logo, description, apply } = this.props.job
    return (
      <div>
      <img src={company_logo} style={{height: '30px', width: '30px'}}/> {title} at {company} in {location} 
      </div>
    )
  }
}
