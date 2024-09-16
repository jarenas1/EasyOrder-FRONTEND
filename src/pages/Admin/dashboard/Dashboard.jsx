import { TableMesas } from '../../../components/TableMesas'
import './dashboard.scss'

export  const Dashboard = () => {
  return (
    <>
     <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2XwnyPtF7Hz-ih0upJkh68hDDA03NbK-Ag&s" alt="" />
        <h2>Nombre del admin</h2>
        <button>Cerrar sesion</button>
      </header>

      <main>
        <h1>Panel de control</h1>
        {/* BUTTON TO SELECT THE CRUD */}
        <section>
            <article>
                <p id='mesas' className='button-left selected-btn'  href="">Mesas</p>
                <p id='productos' className='button-center' href="">Productos</p>
                <p id='meseros' className='button-right' href="">Meseros</p>
            </article>
        </section>
        {/* CRUD */}
        <TableMesas/>
      </main>
    </>
  )
}


