import React, { useState } from 'react'
import './mesasModal.scss'
const MesasModal = () => {

   const [table, setTable] = useState("");
   const [waiterId, setwaiterId] = useState("");

   //Function to change the input values using the state
   const setInputValue = (e) =>{
    switch(e.target.name){
      case 'tableName':
          setTable(e.target.value);
          break;
      case 'waiterId':
        setwaiterId(e.target.value);
          break;
      default:
          return;
  }
}
  

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
          {/* --------------------------------------------------------------------------- */}
          <form className='ModalForm'>
              <input name='tableName' type="text" required placeholder='Numero de mesa' value={table} onChange={setInputValue} />
              <input name='waiterId' type="text" required placeholder='Id mesero asignado' value={waiterId} onChange={setInputValue}/>
              <div className='buttons-container'>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success">Guardar</button>
              </div>
          </form>
          {/* --------------------------------------------------------------------------- */}
        </div>
      </div>
    </article>
</section>
    </>
  )
}

export default MesasModal
