
import { useEffect, useState } from 'react';
import useFetch from '../../api/apiFetch';
import { BtnPaid } from '../btnPaid/BtnPaid';
import { ButtonModal } from '../ButtonCreateModal/ButtonModal';
import { OrderModal } from './OrderModal';
import './tableOrders.scss';
import {io} from 'socket.io-client';
import Swal from 'sweetalert2';



export const TableOrders = () => {
  const [notificacion, setNotificacion] = useState(false)
  const [mesanotificacion, setMesaNotificacion] = useState('')
  const [newData, setNewData] = useState([])
  const [status, setStatus] = useState('')
  const [selectedSession, setSelectedSession] = useState([]);

  const sessionData = async() => {
    let sessions = await fetch("https://easyorder-backend-3.onrender.com/api/v1/sessions", {
      method: 'GET',
      headers: {
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
    'Content-Type': 'application/json',
     },
    });
    setNewData(await sessions.json())
  }


  useEffect(() => {
    sessionData()
  }, [status])

  useEffect(() => {
    if (notificacion) {
      Swal.fire(`Nuevo pedido en la: ${mesanotificacion}`);
    }
  }, [notificacion, mesanotificacion]);



  useEffect(() => {
    const socket = io('https://easyorder-backend-3.onrender.com', {transports: ['websocket']})

    // Web socket connection for live updating of the space status
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('request-status-change', (data) => {
      setStatus(data.status)
    });

    socket.on('new-request', (data) => {
      console.log(data);
      console.log(newData);


      setMesaNotificacion('');

      const mesa = newData.find((element) => element.id === data.sessionId)
      console.log(mesa);

      if( mesa ) {
        setNotificacion(true)
        setMesaNotificacion(mesa.table.name)
      }

    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.off('connect');
      socket.off('spaceStatusUpdated');
      socket.off('disconnect');
    };
  }, []);

  const handleShowModal = (session) => {
    setSelectedSession(session); // Almacenar la sesión seleccionada en el estado
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Mesa</th>
            <th>Cuenta</th>
            <th>Pagado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { newData && newData.length > 0 ?
            newData.map((e) =>{
            return  <tr >
                      <td>{e.table.name}</td>
                      <td>{e.name}</td>
                      <td>
                        <BtnPaid id={e.id} paid={e.paid}/>
                      </td>
                      <td onClick={() => handleShowModal(e)}>
                        <ButtonModal className={"orden-btn"} text={'Ver Orden'} id={'modalSessions'} />
                      </td>
                    </tr>}):
                    <tr>
                      <td>
                        cargando...
                      </td>
                    </tr>}
        </tbody>
      </table>
      <OrderModal data={selectedSession} status={status}/>
    </>
  )
}






