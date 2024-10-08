import "./button.scss"

function Button({text, handlerClick, style}) {
  return (
      <button className={style} onClick={handlerClick}><i class="bi bi-arrow-return-left"></i>{text }</button>
  )
}

export default Button
