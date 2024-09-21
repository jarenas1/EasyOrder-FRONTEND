import React, { useState, useEffect } from 'react';
import './mesasModal.scss';

const MesasModal = ({ name = "", id = "" }) => {
  const [table, setTable] = useState(name);
  const [waiterId, setWaiterId] = useState(id);

  // Este efecto actualiza los valores del estado si las props cambian
  useEffect(() => {
    setTable(name);
    setWaiterId(id);
  }, [name, id]);

  // Función para cambiar los valores de los inputs
  const setInputValue = (e) => {
    switch (e.target.name) {
      case 'tableName':
        setTable(e.target.value);
        break;
      case 'waiterId':
        setWaiterId(e.target.value);
        break;
      default:
        return;
    }
  };

  // Efecto para resetear el estado cuando el modal se cierra
  useEffect(() => {
    const modalElement = document.getElementById('modalTables');
    
    const resetModal = () => {
      setTable("");   // Resetear el campo de la mesa
      setWaiterId(""); // Resetear el campo del mesero
    };

    // Escuchar el evento 'hidden.bs.modal' para resetear los valores
    modalElement.addEventListener('hidden.bs.modal', resetModal);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      modalElement.removeEventListener('hidden.bs.modal', resetModal);
    };
  }, []);

  return (
    <>
      <section className="modal fade" id="modalTables" tabIndex="-1" aria-labelledby="modalTablesl" aria-hidden="true">
        <article className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 text-dark modal-title" id="modalTables">Mesas</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="ModalForm">
                <input
                  name="tableName"
                  type="text"
                  required
                  placeholder="Numero de mesa"
                  value={table}
                  onChange={setInputValue}
                />
                <input
                  name="waiterId"
                  type="text"
                  required
                  placeholder="Id mesero asignado"
                  value={waiterId}
                  onChange={setInputValue}
                />
                <div className="buttons-container">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                    Cerrar
                  </button>
                  <button type="button" className="btn btn-success">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default MesasModal;
