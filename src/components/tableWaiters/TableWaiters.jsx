import { ButtonModal } from "../ButtonCreateModal/ButtonModal"
import { WaitersModal } from "./WaitersModal"

export const TableWaiters = ({waiters}) => {
    return (
      <>
          <section className="table-container">
          <ButtonModal className = "button-add" id = "modalWaiters"/>

        <WaitersModal/>
              <table>
                  <thead>
                      <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                  {waiters
                    .filter(waiter => waiter.role.id !== "3ca4d91f-4ca2-46e5-ba9c-8bd12fe0645a")  // Filtrar los admins
                    .map(waiter => (
                        <tr key={waiter.id}>
                        <td>{waiter.id}</td>
                        <td>{waiter.name} {waiter.lastname}</td>
                        <td>
                            <button id={waiter.id} className="edit-btn">Editar</button>
                            <button id={waiter.id} className="delete-btn">Eliminar</button>
                        </td>
                        </tr>
                    ))
                    }
  
                      <tr>
                      <td>1229232asds021a</td>
                      <td>JUAN ARENAS GAVIRIA</td>
                      <td>
                          <button className="edit-btn">Editar</button>
                          <button className="delete-btn">Eliminar</button>
                      </td>
                      </tr>
  
                      <tr>
                      <td>1229232asds021a</td>
                      <td>JUAN ARENAS GAVIRIA</td>
                      <td>
                          <button className="edit-btn">Editar</button>
                          <button className="delete-btn">Eliminar</button>
                      </td>
                      </tr>
                  </tbody>
              </table>
          </section>
      </>
    )
  }
