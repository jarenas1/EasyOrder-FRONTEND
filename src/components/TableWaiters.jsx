export const TableWaiters = () => {
    return (
      <>
          <section className="table-container">
              <button>
                  Añadir
              </button>
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