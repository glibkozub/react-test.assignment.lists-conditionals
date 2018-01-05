import React from 'react'
import './charComponent.css'

const charComponent = (props) => {
  return (
    <p className="CharComponent" onClick={props.removeClickedElement}>{props.char}</p>
  )
};

export default charComponent