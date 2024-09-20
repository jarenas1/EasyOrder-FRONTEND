import React from 'react'
import './mesasModal.scss'
const MesasModal = () => {
  return (
    <>
  <section class="modal fade" id="modalTables" tabindex="-1" aria-labelledby="modalTablesl" aria-hidden="true">
    <article class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5 text-dark modal-title" id="modalTables">Mesas</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form className='ModalForm'>
              <input type="text" required placeholder='Numero de mesa' />
              <input type="text" required placeholder='Id mesero asignado' />
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

export default MesasModal
