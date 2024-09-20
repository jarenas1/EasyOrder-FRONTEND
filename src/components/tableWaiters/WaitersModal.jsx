import '../tableMesas/MesasModal.scss'

export const WaitersModal = () => {
  return (
    <>
        <section class="modal fade" id="modalWaiters" tabindex="-1" aria-labelledby="modalWaiters" aria-hidden="true">
      <article class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title fs-5 text-dark modal-title" id="modalWaiters">Meseros</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form className='ModalForm'>
                <input type="text" required placeholder='Username' />
                <input type="text" required placeholder='Contraseña' />
                <input type="text" required placeholder='Nombre' />
                <input type="text" required placeholder='Apellido' />
                <div className='buttons-container'>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success">Guardar</button>
                </div>
                
            </form>
          </div>
        </div>
      </article>
  </section>
    </>
  )
}
