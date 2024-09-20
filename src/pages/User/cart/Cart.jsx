import "./cart.scss"
import { CartContext } from '../../../context/CartContext'
import { useContext } from "react"
import CartCard from "../../../components/Cart/CartCard"

function Cart() {
    const { cart } = useContext(CartContext)
    const sessionId = localStorage.getItem("sessionId")
    async function handlerRequest() {

         const requestBody = cart.map(product => ({
            quantity: product.quantity,
            productId: product.id,  
            sessionId: sessionId,
        }));
        try {
            const response = await fetch('https://easyorder-backend-3.onrender.com/api/v1/requests', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody) 
            });

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error("Error al realizar la compra:", error);
        }
    }
    if (cart.length === 0) {
        return<h2 style={{textAlign: "center", color: "#ffff"}}> Carrito vacio</h2>
    }
    
  return (
      <section className='section-cart'>
          <h2>CARRITO</h2>
          
          <div className='serctio-card-container'>
              
              <CartCard products={cart}></CartCard>
          </div>
          <div className="section-cart__btn">
              <button className='btn-pedir' onClick={handlerRequest}>Realizar pedido</button>
            </div>
    </section>
  )
}

export default Cart
