import React from 'react'
import "./NavBar.scss"

import Buttons from '../Buttons/Buttons'

const NavBar = (props) => {

  const {handleReset} = props

  return (
    <div className='nav-bar'>
        <h1 className='nav-bar__heading' >My Todos</h1>
        <span className='nav-bar__button'>
        <Buttons onClick={handleReset} buttonText={'reset'}/>
        </span>
    </div>
  )
}

export default NavBar