import { ButtonModal } from "../ButtonCreateModal/ButtonModal"
import MesasModal from "./MesasModal"

export const TableMesas = ({tables, handleEdit, handleDelete}) => {
    return (
      <>
        <section className="table-container">

        <ButtonModal className = "button-add" id = "modalTables"/>

        <MesasModal/>
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
                    {tables.map(table =>{
                          <tr key={table.id}>
                            <td>{table.name}</td>
                            <td>
                              <button className="edit-btn" onClick={() => handleEdit(product.id)}>Editar</button>
                              <button className="delete-btn" onClick={() => handleDelete(product.id)}>Eliminar</button>
                            </td>
                          </tr>
                    })}
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
  