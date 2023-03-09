import React from 'react'
import JSON from './studentdetail.json'
import Allstudents from './Allstudents.jsx'
import './global.css'

const App = () => {
  return (
    <>
    <Allstudents details={JSON}/>
    </>
  )
}

export default App