
import { useEffect, useRef, useState } from 'react';
import { BtnPaid } from '../btnPaid/BtnPaid';
import { ButtonModal } from '../ButtonCreateModal/ButtonModal';
import { OrderModal } from './OrderModal';
import './tableOrders.scss';
import {io} from 'socket.io-client';
import Swal from 'sweetalert2';



export const TableOrders = () => {
  const [newData, setNewData] = useState([])
  const [selectedSession, setSelectedSession] = useState([]);
  const [paid, setPaid] = useState(0)
  const [notification, setNotification] = useState();

  const sessionData = async() => {
    let sessions = await fetch("https://easyorder-backend-3.onrender.com/api/v1/sessions", {
      method: 'GET',
      headers: {
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
    'Content-Type': 'application/json',
     },
    });
    const data = await sessions.json()

    const paidData = data.filter((e) => e.paid === false)
    setNewData(paidData)
  }

  const newDataRef = useRef(newData);
  newDataRef.current = newData;

  const actualizarSessions = (pago) => {
    setPaid(pago)
  }

  useEffect(() => {
    sessionData()
  }, [selectedSession, paid, notification])


  useEffect(() => {
    const socket = io('https://easyorder-backend-3.onrender.com', {transports: ['websocket']})

    // Web socket connection for live updating of the space status
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('request-status-change', (data) => {
      const session = newDataRef.current.find((e) => data.sessionId === e.id)
      if(data.status === 'Terminado') {
        setSelectedSession(session)
      }
    });

    socket.on('new-request', (data) => {
      setNotification(data.id)
      console.log(data);
      console.log(newDataRef);

      const obj = newDataRef.current.find((e) => data.sessionId === e.id)

      Swal.fire(`Nuevo pedido en la: ${obj.name? obj.name: "que pasa"}`)

    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.off('connect');
      socket.off('request-status-change');
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
                      <td onClick={() => actualizarSessions(!paid)}>
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
      <OrderModal data={selectedSession} />
    </>
  )
}






