
import './activeSessions.scss'
import { TableOrders } from '../../../components/tableOrders/TableOrders'
import { useNavigate } from 'react-router-dom'

export const ActiveSessions = () => {

  const navigate =  useNavigate()


  return (
    <>
      <section className='orders-container'>
        <h1>Pedidos</h1>
        <div className='btn-container-tabs'>
        <button className='btn btn-success butt' onClick={()=>{navigate("/tables")}}>Ver mesas</button>
        </div>
        <article>
            <TableOrders/>
        </article>
      </section>
    </>
  )
}


