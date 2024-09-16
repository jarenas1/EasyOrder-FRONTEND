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
        <section>
            <article>
                <p id='mesas' className='button-left' href="">Mesas</p>
                <p id='productos' className='button-center' href="">Productos</p>
                <a id='meseros' className='button-right' href="">Meseros</a>
            </article>
        </section>
        <section>
            <button>
                Añadir
            </button>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Numero</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1229232asds021a</td>
                    <td>12</td>
                    <td>
                        <button class="edit-btn">Editar</button>
                        <button class="delete-btn">Eliminar</button>
                    </td>
                    </tr>

                    <tr>
                    <td>1229232asds021a</td>
                    <td>12</td>
                    <td>
                        <button class="edit-btn">Editar</button>
                        <button class="delete-btn">Eliminar</button>
                    </td>
                    </tr>

                    <tr>
                    <td>1229232asds021a</td>
                    <td>12</td>
                    <td>
                        <button class="edit-btn">Editar</button>
                        <button class="delete-btn">Eliminar</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </section>
      </main>
    </>
  )
}


