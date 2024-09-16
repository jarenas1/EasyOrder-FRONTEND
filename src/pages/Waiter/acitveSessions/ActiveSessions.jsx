import './activeSessions.scss'

export const ActiveSessions = () => {
  return (
    <>
      <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2XwnyPtF7Hz-ih0upJkh68hDDA03NbK-Ag&s" alt="" />
        <h2>Nombre del mesero</h2>
        <button>Cerrar sesion</button>
      </header>
      <main>
        <h1>Pedidos</h1>
        <section>
          <button>Ver mesas</button>
          <button>ver finalizados</button>
        </section>
        <section>
        <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Mesa</th>
        <th>Acciones</th>
        <th>Ver Orden</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1229232</td>
        <td>12</td>
        <td>
          <button class="status-btn entregado">Marcar como entregado</button>
        </td>
        <td><button class="orden-btn">Ver orden</button></td>
      </tr>
      <tr>
        <td>1229232</td>
        <td>12</td>
        <td>
          <button class="status-btn entregado">Marcar como entregado</button>
        </td>
        <td><button class="orden-btn">Ver orden</button></td>
      </tr>
    </tbody>
  </table>

        </section>
      </main>
      <footer>
        <p>Producido por:</p>
        <img src="" alt="" />
      </footer>
    </>
  )
}


