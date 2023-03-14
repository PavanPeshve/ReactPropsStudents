import React, { Component } from 'react'
import studentDetails from './studentdetail.json'
import Allstudents from './Allstudents.jsx';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      json:studentDetails
    }
  }
  render() {
    return (
      <>
      <Allstudents data={this.state.json}/>
      </>
    )
  }
}
