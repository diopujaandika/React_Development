/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Button = ({ eventHandler, label, btnType }) => {
  return (
    <button 
      className={`btn ${btnType}`} 
      type='button' 
      onClick={eventHandler}>{label}
    </button>
  )
}

export default Button;
