import React, { useContext } from 'react'
import "./productsCard.scss"
import {CartContext} from '../../../context/CartContext'

function ProductsCard({ product }) {
  const { addToCart } = useContext(CartContext)
  
  const {name, price, img} = product
  return (
    <article className='section-showProducts__article'>
        <figure className='section-showProducts__figure'>
            <img src={img} alt="" />
        </figure>
        <div className='section-showProducts__body'>
            <h3>{name.toUpperCase()}</h3>
            <p>$ {price}</p>
            <a href="" onClick={(e) => {
               e.preventDefault()
                addToCart(product)
            }}>
                <i className="bi bi-cart-plus"></i>
            </a>
        </div>

    </article>
  )
}

export default ProductsCard
