import React from 'react'

function Button({text, handlerClick, style}) {
  return (
      <button style={style} onClick={handlerClick}><i class="bi bi-arrow-return-left"></i>{text }</button>
  )
}

export default Button
