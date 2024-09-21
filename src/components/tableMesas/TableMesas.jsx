import { useState } from 'react';
import { ButtonModal } from "../ButtonCreateModal/ButtonModal";
import MesasModal from "./MesasModal";
import useFetch from '../../api/apiFetch';
import { useDelete } from '../../api/useDelete';
export const TableMesas = ({ tables }) => {

  //Trayendo la data de las mesas por medio del hook
    const {data: dataTables, error: errorTables } = useFetch("https://easyorder-backend-3.onrender.com/api/v1/tables", {
    method: 'GET',
    headers: {
  'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  'Content-Type': 'application/json',
   },
 });
 
  // Estado para manejar los datos de la mesa que se va a editar
  const [selectedTable, setSelectedTable] = useState({ name: "", id: "", userId: "", button: ""});

  // Función para manejar el click en Editar y pasar los datos de la mesa seleccionada
  const handleEditClick = (name, id, userId, button) => {
    setSelectedTable({ name,id, userId, button}); // Actualizamos el estado con los valores de la mesa seleccionada
  };

  //Funcion para eliminar una mesa


  return (
    <>
      <section className="table-container">
        <ButtonModal className="button-add" id="modalTables" text="Crear" />

        <table>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Mesero</th>
              <th>Numero</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataTables.map((table) => (
              <tr key={table.id}>
                <td>{table.status}</td>
                <td>{table.user.name} {table.user.lastname}</td>
                <td>{table.name}</td>
                <td>
                  {/* Botón Editar que pasa los datos de la mesa al modal */}
                  <ButtonModal
                    className="edit-btn"
                    id="modalTables"
                    text="Editar"
                    handleClick={() => handleEditClick(table.name, table.id, table.user.id, "edit")}
                  />

                  <button
                    className="delete-btn"
                    onClick={() => useDelete(table.id,"https://easyorder-backend-3.onrender.com/api/v1/tables")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Aquí pasamos los datos de la mesa seleccionada como propiedades al componente MesasModal */}
      <MesasModal
        name={selectedTable.name}
        idWaiter={selectedTable.userId}
        idTable={selectedTable.id}
        button ={selectedTable.button}
      />
    </>
  );
};
