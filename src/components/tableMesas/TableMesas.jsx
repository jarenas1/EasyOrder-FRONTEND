import { ButtonModal } from "../ButtonCreateModal/ButtonModal"
import MesasModal from "./MesasModal"

export const TableMesas = () => {
    return (
      <>
        <section className="table-container">

        <ButtonModal className = "btn-success" id = "modalTables"/>

{/* <TableMesas/> */}

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
                          <button className="edit-btn">Editar</button>
                          <button className="delete-btn">Eliminar</button>
                      </td>
                      </tr>
  
                      <tr>
                      <td>1229232asds021a</td>
                      <td>12</td>
                      <td>
                          <button className="edit-btn">Editar</button>
                          <button className="delete-btn">Eliminar</button>
                      </td>
                      </tr>
  
                      <tr>
                      <td>1229232asds021a</td>
                      <td>12</td>
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
  