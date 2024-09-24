import { useState } from "react";
import './toggleButton.scss'

export const ToggleButtonOrders = () => {
  const [status, setStatus] = useState('preparación');

  // Función que cambia el estado cuando se hace clic
  const toggleStatus = () => {    
    // Dependiendo del estado actual, cambiamos al siguiente estado
    if (status === 'preparación') {
      setStatus('entregado'); // Cambia de "preparación" a "entregado"
    } else if (status === 'entregado') {
      setStatus('finished'); // Cambia de "entregado" a "finished"
    }
  };

  return (
    <>
    <button
      onClick={toggleStatus}
      style={{
        backgroundColor: status === 'preparación' ? '#FFC107' : (status === 'entregado' ? '#198754' : 'blue'),
        color: status === 'preparación' ? 'black' : (status === 'entregado' ? 'white' : 'blue'),
      }} className='button-toggle'
    >
      {status === 'preparación' ? 'Marcar en preparacion' : (status === 'entregado' ? 'Marcar Entregado' : 'Finished')}
    </button>
    </>
  );
}

