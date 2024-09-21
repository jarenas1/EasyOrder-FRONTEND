import { useState } from 'react';
import { ButtonModal } from "../ButtonCreateModal/ButtonModal";
import MesasModal from "./MesasModal";

export const TableMesas = ({ tables }) => {
  // Estado para manejar los datos de la mesa que se va a editar
  const [selectedTable, setSelectedTable] = useState({ name: "", id: "", userId: "" });

  // Función para manejar el click en Editar y pasar los datos de la mesa seleccionada
  const handleEditClick = (id, name, userId) => {
    setSelectedTable({ id, name, userId }); // Actualizamos el estado con los valores de la mesa seleccionada
  };

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
            {tables.map((table) => (
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
                    handleClick={() => handleEditClick(table.id, table.name, table.user.id)}
                  />

                  {/* Botón Eliminar */}
                  <button
                    className="delete-btn"
                    onClick={() => deleteTable(table.id)}
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
        id={selectedTable.userId}
      />
    </>
  );
};
