import React, { useState, useEffect } from 'react';
import './mesasModal.scss';
import Swal from 'sweetalert2';

const MesasModal = ({ name = "", idWaiter = "", idTable = "", button = "", onTableUpdate }) => {
  const [table, setTable] = useState(name);
  const [tableId, setTableId] = useState(idTable);
  const [waiterId, setWaiterId] = useState(idWaiter);
  const [action, setAction] = useState(button);

  useEffect(() => {
    setTable(name);
    setTableId(idTable);
    setWaiterId(idWaiter);
    setAction(button);
  }, [name, idWaiter, idTable, button]);

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

  useEffect(() => {
    const modalElement = document.getElementById('modalTables');
    
    const resetModal = () => {
      setTable("");
      setWaiterId("");
      setAction("");
      setTableId("");
    };

    modalElement.addEventListener('hidden.bs.modal', resetModal);

    return () => {
      modalElement.removeEventListener('hidden.bs.modal', resetModal);
    };
  }, []);

  const handleEditOrCreate = async (action) => {
    const url = action === "edit" 
      ? `https://easyorder-backend-3.onrender.com/api/v1/tables/${tableId}/name-user`
      : `https://easyorder-backend-3.onrender.com/api/v1/tables`;

    const method = action === "edit" ? 'PATCH' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("userToken")}`
        },
        body: JSON.stringify({
          name: table,
          user: waiterId,
          status: action === "edit" ? undefined : "disponible"
        })
      });

      if (!response.ok) {
        throw new Error('La respuesta de la red no fue satisfactoria');
      }

      const data = await response.json();
      console.log(data);

      Swal.fire({
        title: "¡Éxito!",
        text: `Mesa ${action === "edit" ? "actualizada" : "creada"} correctamente.`,
        icon: "success",
      });

      if (onTableUpdate) {
        onTableUpdate();
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: "Error",
        text: `Hubo un problema al ${action === "edit" ? "actualizar" : "crear"} la mesa.`,
        icon: "error",
      });
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
                  placeholder="Número de mesa"
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
                  <button type="button" className="btn btn-success" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleEditOrCreate(action)}>
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