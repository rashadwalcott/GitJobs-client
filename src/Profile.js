import React from 'react';

export default class Profile extends React.Component {

  render(){
    console.log(this.props);
    return(
      <div>Welcome {this.props.username}!</div>
    )
  }
}
