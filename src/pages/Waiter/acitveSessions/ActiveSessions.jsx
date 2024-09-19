import { OrderButton } from '../../../components/OrderButton'
import './activeSessions.scss'
import { TableOrders } from '../../../components/TableOrders'
import Footer from '../../../components/footer/Footer'

export const ActiveSessions = () => {
  return (
    <>
      {/* <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2XwnyPtF7Hz-ih0upJkh68hDDA03NbK-Ag&s" alt="" />
        <h2>Nombre del mesero</h2>
        <button>Cerrar sesion</button>
      </header> */}
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


