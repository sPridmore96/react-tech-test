import React from 'react'
import "./CheckBoxes.scss"

const CheckBoxes = (props) => {

  const {handleCheckBox} = props

  return (
    <div>
        <input onClick={handleCheckBox} type="checkbox" />
    </div>
  )
}

export default CheckBoxes