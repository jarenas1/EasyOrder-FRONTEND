export const TableProducts = () => {
    return (
      <>
        <section className="table-container">
              <button>
                  Añadir
              </button>
              <table>
                  <thead>
                      <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td><img className="img-product-table" src="https://licoresjunior.com/wp-content/uploads/2023/12/Licor-Ron-Viejo-de-Caldas-750-Nueva-Imagen.jpg" alt="" /></td>
                      <td>Aguardiente Antioqueño 1L</td>
                      <td>000.000</td>
                      <td>
                          <button className="edit-btn">Editar</button>
                          <button className="delete-btn">Eliminar</button>
                      </td>
                      </tr>
  
                      <tr>
                      <td><img className="img-product-table" src="https://licoresjunior.com/wp-content/uploads/2023/12/Licor-Ron-Viejo-de-Caldas-750-Nueva-Imagen.jpg" alt="" /></td>
                      <td>12</td>
                      <td>000.000</td>
                      <td>
                          <button className="edit-btn">Editar</button>
                          <button className="delete-btn">Eliminar</button>
                      </td>
                      </tr>
  
                      <tr>
                      <td><img className="img-product-table" src="https://licoresjunior.com/wp-content/uploads/2023/12/Licor-Ron-Viejo-de-Caldas-750-Nueva-Imagen.jpg" alt="" /></td>
                      <td>12</td>
                      <td>000.000</td>
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