import React, { Component } from 'react'
import './general.css'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  countAppreciate=()=>{
    this.setState({count: this.state.counter++})
  }
  countDepreciate=()=>{
    this.setState({count: this.state.counter--})
  }
  countReset=()=>{
    this.setState({counter: 0})
  }
  render() {
    return (
      <div className='mainclass'>
      <h1>{this.state.counter}</h1>
      <div className='buttons'>
        <button onClick={this.countAppreciate} id="btn1">APPRECIATE</button>
        <button onClick={this.countDepreciate} id="btn1">DEPRECIATE</button>
        <button onClick={this.countReset} id="btn1">RESET</button>
      </div>
      </div>
    )
  }
}
