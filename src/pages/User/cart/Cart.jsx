import "./cart.scss"
import { CartContext } from '../../../context/CartContext'
import { useContext } from "react"
import CartCard from "../../../components/Cart/CartCard"
import { useNavigate } from "react-router-dom"

function Cart() {
    const { cart } = useContext(CartContext)
   
    
    if (cart.length === 0) {
        return<h2 style={{textAlign: "center", color: "#ffff"}}> Carrito vacio</h2>
    }
    
  return (
      <section className='section-cart'>
          <h2>CARRITO</h2>
          
          <div className='serctio-card-container'>
              <CartCard products= {cart}></CartCard>
          </div>
    </section>
  )
}

export default Cart
