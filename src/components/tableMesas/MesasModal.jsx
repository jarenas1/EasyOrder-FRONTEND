import React, { useState, useEffect } from 'react';
import './mesasModal.scss';

const MesasModal = ({ name = "",idWaiter = "",idTable="", button = "" }) => {
  const [table, setTable] = useState(name);
  const [tableId, setTableId] = useState(idTable);
  const [waiterId, setWaiterId] = useState(idWaiter);
  const [action, setAction] = useState(button);
  
console.log(action);

  // Este efecto actualiza los valores del estado si las props cambian
  useEffect(() => {
    setTable(name);
    setTableId(idTable);
    setWaiterId(idWaiter);
    setAction(button);
  }, [name, idWaiter, button]);

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
      setAction("");   // Resetear el botón
      setTableId("")
    };

    // Escuchar el evento 'hidden.bs.modal' para resetear los valores
    modalElement.addEventListener('hidden.bs.modal', resetModal);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      modalElement.removeEventListener('hidden.bs.modal', resetModal);
    };
  }, []);


  //FUNCION QUE EDITA O ELIMINA:
  const handleEditOrDelete = async (action) => {
    console.log(action);
    
    if (action === "edit"){//FIX URL
        const response = await fetch (`https://easyorder-backend-3.onrender.com/api/v1/tables/${tableId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("userToken")}`
          },
          body: JSON.stringify({
            name : table,
            user: waiterId
          })
        })
        const data = await response.json();
        console.log(data);
        
    }else{
      const response = await fetch (`https://easyorder-backend-3.onrender.com/api/v1/tables`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("userToken")}`
        },
        body: JSON.stringify({
          name : table,
          status: "disponible",
          user: waiterId
        })
      })
      const data = await response.json();
      console.log(data);
      
    }
  };
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
                  <button type="button" className="btn btn-success" data-bs-dismiss="modal" aria-label="Close" onClick={(e)=>{
                    handleEditOrDelete(action);
                  }}>
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
