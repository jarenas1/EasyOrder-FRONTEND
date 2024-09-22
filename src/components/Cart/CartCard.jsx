import "./cartCard.scss"
import {CartContext} from '../../context/CartContext'
import { useContext } from "react"
function CartCard({ products }) {
    const { removeFromCart } = useContext(CartContext)
    return (<>
          <table className="cart-table">
            {/* Encabezado de la tabla */}
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Units</th>
                    <th>Price</th>
                    
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
                        <td>${ele.totalPrice}</td>
                        <td>
                            <button className="btn__eliminar" onClick={() => removeFromCart(ele.id)}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    
    </>
      
  )
}

export default CartCard
