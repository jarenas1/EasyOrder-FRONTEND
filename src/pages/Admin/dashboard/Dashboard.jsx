import { CrudButton } from '../../../components/CrudButton'
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
        <CrudButton/>
        </section>
        {/* CRUD */}
      </main>
    </>
  )
}


