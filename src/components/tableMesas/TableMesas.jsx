import { ButtonModal } from "../ButtonCreateModal/ButtonModal"
import MesasModal from "./MesasModal"

export const TableMesas = ({tables, deleteTable, editTable}) => {
    return (
      <>
        <section className="table-container">

        <ButtonModal className = "button-add" id = "modalTables" text = "Crear"/>

        <MesasModal/> 
{/* <TableMesas/> */}

              <table>
                  <thead>
                      <tr>
                        <th>Estado</th>
                        <th>Mesero</th>
                        <th>Numero</th>
                        <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                    {tables.map(table =>(
                          <tr key={table.id}>
                            <td>{table.status}</td>
                            <td>{table.user.name} {table.user.lastname} </td>
                            <td>{table.name}</td>
                            <td>
                              <ButtonModal className = "edit-btn" id = "modalTables" text = "Editar" handleClick={(e) => editTable(table.id, table.name, table.user.id)}/>

                              <button className="delete-btn" onClick={(e) => deleteTable(table.id, table.name, table.user.id )}>Eliminar</button>
                            </td>
                          </tr>
                    ))}
                  </tbody>
              </table>
          </section>
      </>
    )
  }
  