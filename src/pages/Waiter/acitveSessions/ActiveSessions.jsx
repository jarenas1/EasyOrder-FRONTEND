
import './activeSessions.scss'
import { TableOrders } from '../../../components/tableOrders/TableOrders'
import { useNavigate } from 'react-router-dom'

export const ActiveSessions = () => {

  const navigate =  useNavigate()


  return (
    <>
      <section className='orders-container'>
      <button className='btn btn-success butt' onClick={()=>{navigate("/tables")}}>Ver mesas</button>
        <h1>Pedidos</h1>
        <article>
            <TableOrders/>
        </article>
      </section>
    </>
  )
}


