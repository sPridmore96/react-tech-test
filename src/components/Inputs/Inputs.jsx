import React from 'react'
import "./Inputs.scss"

const Inputs = (props) => {

  const {handleInput, name, placeHolder} = props

  return (
    <div>
        <label htmlFor=""></label>
        <input name={name} placeholder={placeHolder} onInput={handleInput} type="text" />
    </div>
  )
}

export default Inputs