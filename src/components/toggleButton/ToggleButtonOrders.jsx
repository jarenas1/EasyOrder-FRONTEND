import { useState } from "react";
import './toggleButton.scss'

async function updateStatus(id, status) {
  const fetchData = await fetch(`https://easyorder-backend-3.onrender.com/api/v1/requests/${id}/status`, {
    method: 'PATCH',
    headers: {
  'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  'Content-Type': 'application/json',
   },
   body: JSON.stringify({ status: status })
  });
  let data = await fetchData.json()
  console.log(data);

}

export const ToggleButtonOrders = ({id, reqStatus}) => {

  const [status, setStatus] = useState(reqStatus);

  // Función que cambia el estado cuando se hace clic
  const toggleStatus = () => {

    // Dependiendo del estado actual, cambiamos al siguiente estado
    if (status === 'Recibido') {
      setStatus('Preparación'); // Cambia de "Recibido" a "entregado"
      updateStatus(id, 'Preparación')

    } else if (status === 'Preparación') {
      setStatus('Entregado'); // Cambia de "entregado" a "Entregado"
      updateStatus(id, 'Entregado')

    } else if (status === 'Entregado'){
      setStatus('Terminado')
      updateStatus(id, 'Terminado')
    }

  };

  return (
    <>
    <button
      onClick={toggleStatus}
      style={{
        backgroundColor: status === 'Recibido' ? '#FFC107' : (status === 'Preparación' ? '#198754' : 'blue'),
        color: status === 'Recibido' ? 'black' : (status === 'Preparación' ? 'white' : 'black'),
      }} className='button-toggle'
    >
      {status === 'Recibido' ? 'Marcar en Preparación' : (status === 'Preparación' ? 'Marcar Entregado' : 'Terminado')}
    </button>
    </>
  );
}

