import React from 'react'
import "./window.scss"

function Window(props) {
  return (
    <div className = {`main-window ${props.customClassName}`}>
    <div className='window-bar'>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='bar-items'>
    <div className='title text-sm md:text-xl'>
    {props.title}
    </div>
    </div>
    </div>
    <div className='window-content'>
      {props.content}
    </div>
    </div>
  )
}

export default Window