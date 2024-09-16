import { OrderButton } from '../../../components/OrderButton'
import { Foot } from '../../../components/Foot'
import './activeSessions.scss'
import { TableOrders } from '../../../components/TableOrders'

export const ActiveSessions = () => {
  return (
    <>
      <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2XwnyPtF7Hz-ih0upJkh68hDDA03NbK-Ag&s" alt="" />
        <h2>Nombre del mesero</h2>
        <button className='button-session'>Cerrar sesion</button>
      </header>
      <main>
        <h1>Pedidos</h1>
        <section>
          <button className='button-red'>Ver mesas</button>
          <button className='button-red'>ver finalizados</button>
        </section>
        <section>
            <TableOrders/>
        </section>
      </main>
      <footer>
        <Foot/>
      </footer>
    </>
  )
}


