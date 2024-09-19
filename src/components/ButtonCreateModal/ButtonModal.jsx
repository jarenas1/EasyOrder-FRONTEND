export const ButtonModal = ({className, id}) => {
  return (
    <>
    <button type="button" className={`btn ${className}`} data-bs-toggle="modal" data-bs-target={`#${id}`}>
        Añadir
    </button>
    </>
  )
}

