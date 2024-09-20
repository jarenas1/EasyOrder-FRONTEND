import "./cart.scss"
import { CartContext } from '../../../context/CartContext'
import { useContext } from "react"
import CartCard from "../../../components/Cart/CartCard"
import Swal from 'sweetalert2';
function Cart() {
   const { cart } = useContext(CartContext);
    const sessionId = localStorage.getItem("sessionId");

    async function handlerRequest() {
        // Confirmar si el usuario quiere realizar el pedido
        const { isConfirmed } = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas realizar el pedido?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, realizar pedido',
            cancelButtonText: 'No, cancelar'
        });

        if (isConfirmed) {
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
                await response.json();   
                if (!response.ok) {
                    throw new Error("Error al realizar el pedido");
                    
                }
                Swal.fire({
                    title: 'Pedido realizado',
                    text: 'Tu pedido ha sido realizado con éxito.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });

            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                });
            }
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
