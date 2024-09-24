
import './activeSessions.scss'
import { TableOrders } from '../../../components/tableOrders/TableOrders'

export const ActiveSessions = () => {




  return (
    <>
      <section className='orders-container'>
        <h1>Pedidos</h1>
        <article>
            <TableOrders/>
        </article>
      </section>
    </>
  )
}


