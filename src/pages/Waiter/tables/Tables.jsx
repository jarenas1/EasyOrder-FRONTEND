import React, { useEffect, useState } from 'react';
import './tables.scss'
import { updateTableStatus } from '../../../components/updateTableStatus/UpdateTableStatus';

export const TablesWaiter = () => {
  const [mesas, setMesas] = useState([]);

  // Obtener mesas desde el endpoint (simulado)
  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await fetch("https://easyorder-backend-3.onrender.com/api/v1/tables", {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
              'Content-Type': 'application/json',
            },
          });
        const data = await response.json();
        setMesas(data);
      } catch (error) {
        console.error('Error al obtener las mesas:', error);
      }
    };
    
    fetchMesas();
  }, []);

  // Función para manejar el toggle del botón
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'ocupado' ? 'disponible' : 'ocupado';
    const updatedMesa = await updateTableStatus(id, newStatus);

    // Solo actualiza si el PATCH fue exitoso
    if (updatedMesa) {
      setMesas((prevMesas) =>
        prevMesas.map((mesa) =>
          mesa.id === id ? { ...mesa, status: updatedMesa.status } : mesa
        )
      );
    }
  };

  return (
    <>
    <h1>Mesas</h1>
    <section className="tables-table-container">
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {mesas.map((mesa) => (
          <tr key={mesa.id}>
            <td>{mesa.id}</td>
            <td>{mesa.name}</td>
            <td>{mesa.status}</td>
            <td>
              <button
                onClick={() => handleToggleStatus(mesa.id, mesa.status)}
                className = {mesa.status == "ocupado" ? "btn btn-success" : "btn btn-primary"}
              >
                {mesa.status === 'ocupado'
                  ? 'Marcar como disponible'
                  : 'Marcar como ocupada'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
    </>
  );
};
