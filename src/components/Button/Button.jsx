import React from 'react'
import './button.scss'

const Button = (props) => {


  return (
   <>
   <div className={`main_btn_container ${props.className}`}>
    <button onClick={props.onClick} className={`btn ${props.customClassName}`}>{props.name}</button>
   </div>
   </>
  )
}

export default Button