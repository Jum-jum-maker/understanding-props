import React from 'react'
import Jumoke from './Jumoke'

const World = (props) => {
  let name = "how are you doing"
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
   
    <Jumoke hello={props.mike} />

    </div>
  )
}

export default World