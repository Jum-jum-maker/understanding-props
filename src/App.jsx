import { useState } from 'react'
import React from "react"
import Hello from './components/Hello'
import './App.css'
import World from './components/World'


function App() {
  const textMessage = "My name is jumoke"
  const array = [1,2,3,4,5]
 
  return (
    <React.Fragment>
      <h1>Hello from App.jsx</h1>
      <div className='container'>
    <Hello jumoke={textMessage} array={array} /> 
    <World mike={array}/>
      </div>
    
    </React.Fragment>
  )
}

export default App
