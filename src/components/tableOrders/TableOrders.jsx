
import { useState } from 'react';
import useFetch from '../../api/apiFetch';
import { BtnPaid } from '../btnPaid/BtnPaid';
import { ButtonModal } from '../ButtonCreateModal/ButtonModal';
import { OrderModal } from './OrderModal';
import './tableOrders.scss';


export const TableOrders = () => {
  const {data: sessions, error: errorSessions} = useFetch("https://easyorder-backend-3.onrender.com/api/v1/sessions", {
    method: 'GET',
    headers: {
  'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  'Content-Type': 'application/json',
   },
  });

  // useEffect(() => {
  //   getAll();

  //   // Web socket connection for live updating of the space status
  //   socket.on('connect', () => {
  //     // console.log('Connected to server');
  //   });

  //   // socket.on('connect_error', (error) => {
  //   //   // console.error('Connection error:', error);
  //   // });

  //   socket.on('spaceStatusUpdated', (data) => {
  //     // console.log('Space Status Updated:', data);
  //     updateSpaceStatus(data.spaceId, data.status);
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('Disconnected from server');
  //   });

  //   return () => {
  //     socket.off('connect');
  //     socket.off('spaceStatusUpdated');
  //     socket.off('disconnect');
  //   };
  // }, []);

  return (
    <>
        {/* <OrderModal /> */}
        <table>
        <thead>
          <tr>
            <th>Mesa</th>
            <th>Pagado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            sessions.map((e) =>{
            return <tr key={e.id}>
            <td>{e.table.name}</td>
            <td>
              <BtnPaid id={e.id} paid={e.paid}/>
            </td>
            <td>
              <ButtonModal className={"orden-btn"} text={'Ver Orden'} id={'modalSessions'} />
            </td>
          </tr>})}
        </tbody>
    </table>
    </>
  )
}






