import React, { useContext } from 'react';
import "./productsCard.scss";
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2'; // Importa SweetAlert2

function ProductsCard({ product }) {
  const { addToCart } = useContext(CartContext);
  
  const { name, price, url } = product;

  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(price);

  return (
    <article className='section-showProducts__article'>
      <figure className='section-showProducts__figure'>
        <img src={url} alt="Product Image" />
      </figure>
      <div className='section-showProducts__body'>
        <h3>{name.toUpperCase()}</h3>
        <p>{formattedPrice}</p>
        <a href="" onClick={(e) => {
          e.preventDefault();
          addToCart(product);

          // Añade una alerta usando SweetAlert2
          Swal.fire({
            title: 'Producto añadido',
            text: `${name} ha sido añadido al carrito.`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
          });
        }}>
          <i className="bi bi-cart-plus"></i>
        </a>
      </div>
    </article>
  );
}

export default ProductsCard;
