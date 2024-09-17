import React from 'react'

function Button({text, handlerClick}) {
  return (
      <button onClick={handlerClick}>{text }</button>
  )
}

export default Button
