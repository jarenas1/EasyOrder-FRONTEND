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
                      <th>Estado</th>
                      <th>Numero</th>
                      <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                    {tables.map(table =>(
                          <tr key={table.id}>
                            <td>{table.status}</td>
                            <td>{table.name}</td>
                            <td>
                              <button className="edit-btn" onClick={() => handleEdit(product.id)}>Editar</button>
                              <button className="delete-btn" onClick={() => handleDelete(product.id)}>Eliminar</button>
                            </td>
                          </tr>
                    ))}
                  </tbody>
              </table>
          </section>
      </>
    )
  }
  