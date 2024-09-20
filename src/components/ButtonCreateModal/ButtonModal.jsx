export const ButtonModal = ({className, id, text, name, handleClick}) => {
  return (
    <>
    <button onClick={handleClick} name={name} type="button" className={`btn ${className}`} data-bs-toggle="modal" data-bs-target={`#${id}`}>
        {text}
    </button>
    </>
  )
}

