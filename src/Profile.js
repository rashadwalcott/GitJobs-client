import React from 'react';
import Job from './Job';

export default class Profile extends React.Component {


  render(){
    console.log(this.props);
    // console.log(this.state);
    const favs = this.props.favoriteJobs.map((job) => <Job job={job} key={job.id}/>)
    return(
      <div>
      Welcome {this.props.username}!
      {favs}
      </div>
    )
  }
}
