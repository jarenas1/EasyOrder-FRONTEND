export const TableProducts = () => {
  return (
    <>
      <section>
            <button>
                Añadir
            </button>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1229232asds021a</td>
                    <td>Aguardiente Antioqueño 1L</td>
                    <td>000.000</td>
                    <td>
                        <button className="edit-btn">Editar</button>
                        <button className="delete-btn">Eliminar</button>
                    </td>
                    </tr>

                    <tr>
                    <td>1229232asds021a</td>
                    <td>12</td>
                    <td>000.000</td>
                    <td>
                        <button className="edit-btn">Editar</button>
                        <button className="delete-btn">Eliminar</button>
                    </td>
                    </tr>

                    <tr>
                    <td>1229232asds021a</td>
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
