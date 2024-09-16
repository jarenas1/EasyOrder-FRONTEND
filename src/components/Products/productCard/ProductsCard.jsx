import React from 'react'
import "./productsCard.scss"
function ProductsCard({name, price, img}) {
  return (
    <article className='section-showProducts__article'>
        <figure className='section-showProducts__figure'>
            <img src={img} alt="" />
        </figure>
        <div className='section-showProducts__body'>
            <h3>{name}</h3>
            <p>$ {price}</p>
            <a href="">
                <i className="bi bi-cart-plus"></i>
            </a>
        </div>

    </article>
  )
}

export default ProductsCard
