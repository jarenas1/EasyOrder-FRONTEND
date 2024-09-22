import { useState, useEffect, useCallback } from 'react';
import { ButtonModal } from "../ButtonCreateModal/ButtonModal";
import MesasModal from "./MesasModal";
import { useDelete } from '../../api/useDelete';

export const TableMesas = () => {
  const [dataTables, setDataTables] = useState([]);
  const [errorTables, setErrorTables] = useState(null);
  const [selectedTable, setSelectedTable] = useState({ name: "", id: "", userId: "", button: "" });

  const fetchTables = useCallback(async () => {
    try {
      const response = await fetch("https://easyorder-backend-3.onrender.com/api/v1/tables", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Hubo un problema al obtener las mesas');
      }
      const data = await response.json();
      setDataTables(data);
    } catch (error) {
      setErrorTables(error.message);
    }
  }, []);

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

  const handleEditClick = (name, id, userId, button) => {
    setSelectedTable({ name, id, userId, button });
  };

  const handleDelete = useCallback(async (id) => {
    await useDelete(id, "https://easyorder-backend-3.onrender.com/api/v1/tables", fetchTables);
  }, [fetchTables]);

  const handleTableUpdate = useCallback(() => {
    fetchTables();
  }, [fetchTables]);

  if (errorTables) {
    return <div>Error: {errorTables}</div>;
  }

  return (
    <>
      <section className="table-container">
        <ButtonModal className="button-add" id="modalTables" text="Crear" />

        <table>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Mesero</th>
              <th>Número</th>
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
                  <ButtonModal
                    className="edit-btn"
                    id="modalTables"
                    text="Editar"
                    handleClick={() => handleEditClick(table.name, table.id, table.user.id, "edit")}
                  />
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(table.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <MesasModal
        name={selectedTable.name}
        idWaiter={selectedTable.userId}
        idTable={selectedTable.id}
        button={selectedTable.button}
        onTableUpdate={handleTableUpdate}
      />
    </>
  );
};