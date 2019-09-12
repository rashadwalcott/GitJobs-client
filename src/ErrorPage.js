import React from 'react'
import error from './unnamed.png'

export default class ErrorPage extends React.Component {

  render(){
    return(
      <div>
      404 Error
      <br></br>
      ACCESS DENIED
      <br></br>
      <img src={error} alt='error cat' style={{height: '700px', width: '700px'}}/>
      </div>
    )
  }
}
