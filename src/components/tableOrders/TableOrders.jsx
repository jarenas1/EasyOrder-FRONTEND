
import { ToggleButtonOrders } from '../toggleButton/ToggleButtonOrders';
import './tableOrders.scss';

export const TableOrders = () => {
  return (
    <>
        <table>
        <thead>
          <tr>
            <th>Mesa</th>
            <th>Acciones</th>
            <th>Ver Orden</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12</td>
            <td>
              <ToggleButtonOrders/>
            </td>
            <td><button className="orden-btn">Ver orden</button></td>
          </tr>
          <tr>
            <td>12</td>
            <td>
            <ToggleButtonOrders/>
            </td>
            <td><button className="orden-btn">Ver orden</button></td>
          </tr>
        </tbody>
    </table>
    </>
  )
}