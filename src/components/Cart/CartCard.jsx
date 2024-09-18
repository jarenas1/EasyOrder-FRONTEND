import "./cartCard.scss"
import {CartContext} from '../../context/CartContext'
import { useContext } from "react"
function CartCard({ products }) {
    const { removeFromCart } = useContext(CartContext)
    return (<>
        {
            products.map(ele => {
                return <article key={ele.id} className='serctio-card-container__article'>
                    <div className="serctio-card-container__info">
                        <figure className='serctio-card-container__figure'>
                            <img src={ele.img} alt="" />
                        </figure>
                        <p>{ele.name.toUpperCase()}</p>
                        <p>{ele.quantity }</p>
                        <p>${ele.totalPrice}</p>
                        <button className="btn__eliminar" onClick={() => {
                            removeFromCart(ele.id)
                        }}>
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    </article >
            })
        }
    
    </>
      
  )
}

export default CartCard
