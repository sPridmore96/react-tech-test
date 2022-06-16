import React from 'react'
import "./Buttons.scss"


const Buttons = (props) => {

  const {buttonText, onClick} = props

  return (
    <button onClick={onClick} >{buttonText}</button>
  )
}

export default Buttons