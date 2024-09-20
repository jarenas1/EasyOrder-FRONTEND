import { ButtonModal } from "../ButtonCreateModal/ButtonModal"
import { WaitersModal } from "./WaitersModal"

export const TableWaiters = () => {
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
