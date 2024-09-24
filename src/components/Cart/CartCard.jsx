import "./cartCard.scss"
import {CartContext} from '../../context/CartContext'
import { useContext } from "react"
function CartCard({ products }) {
    const { removeFromCart } = useContext(CartContext)

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP'
        }).format(price);
    };

    const totalSum = products.reduce((acc, ele) => acc + ele.totalPrice, 0);

    return (<>
          <table className="cart-table">
            {/* Encabezado de la tabla */}
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Productos</th>
                    <th>Unidades</th>
                    <th>Precio</th>
                    
                </tr>
            </thead>
            
            {/* Cuerpo de la tabla */}
            <tbody>
                {products.map(ele => (
                    <tr key={ele.id}>
                        <td>
                            <figure className='cart-table__figure'>
                                <img src={ele.url} alt="Product Image" />
                            </figure>
                        </td>
                        <td>{ele.name.toUpperCase()}</td>
                        <td>{ele.quantity}</td>
                        <td>{formatPrice(ele.totalPrice)}</td>
                        <td>
                            <button className="btn__eliminar" onClick={() => removeFromCart(ele.id)}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                    <tr>
                        <td colSpan="3" style={{ textAlign: 'right' }}><strong>Total:</strong></td>
                        <td colSpan="2">{formatPrice(totalSum)}</td>
                    </tr>
                </tfoot>
        </table>
    
    </>
      
  )
}

export default CartCard
