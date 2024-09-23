import '../tableMesas/mesasModal.scss'

export const ProductsModal = () => {
  return (
    <>
    <section class="modal fade" id="modalProducts" tabindex="-1" aria-labelledby="modalProducts" aria-hidden="true">
      <article class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title fs-5 text-dark modal-title" id="modalProducts">Mesas</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form className='ModalForm'>
                <input type="text" required placeholder='Url de la imagen' />
                <input type="text" required placeholder='Nombre del producto' />
                <input type="number" required placeholder='Precio' />
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
