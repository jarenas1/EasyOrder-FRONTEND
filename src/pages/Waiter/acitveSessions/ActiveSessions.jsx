
import './activeSessions.scss'
import { TableOrders } from '../../../components/tableOrders/TableOrders'

export const ActiveSessions = () => {



  
  return (
    <>
      <section className='orders-container'>
        <h1>Pedidos</h1>
        <article>
          <button className='button-red'>Ver mesas</button>
          <button className='button-red'>ver finalizados</button>
        </article>
        <article>
            <TableOrders/>
        </article>
      </section>
    </>
  )
}


