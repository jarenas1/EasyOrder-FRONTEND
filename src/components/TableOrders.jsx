//import { OrderButton } from "./OrderButton"

export const TableOrders = () => {
  return (
    <>
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
              <OrderButton/>
            </td>
            <td><button className="orden-btn">Ver orden</button></td>
          </tr>
          <tr>
            <td>1229232</td>
            <td>12</td>
            <td>
              <OrderButton/>
            </td>
            <td><button className="orden-btn">Ver orden</button></td>
          </tr>
        </tbody>
    </table>
    </>
  )
}