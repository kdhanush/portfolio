import React from 'react'
import Button from '../Button/button'
import './navbar.scss'

const Navbar = () => {


  const handleClick = (data) => {
    console.log('clicked')
  }


  return (
    <>
    <div className="main_navbar_container">  
      <div className='icon'> <p></p></div>
      <div className='button-container'>
      <Button onClick = {handleClick} customClassName = " bg-amber-400 text-lg font-bold text-[#F9F7E5]" name = 'Contact'/>
      <Button onClick = {handleClick} customClassName = " text-lg font-bold border-2 border-amber-400 border-solid text-amber-500" name = 'Resume'/>
      </div>
    </div>
    </>
  )
}

export default Navbar