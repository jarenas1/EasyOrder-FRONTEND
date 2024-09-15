import React from 'react'

function ProductsCard({name, amount}) {
  return (
    <article>
        <figure>
            <img src="" alt="" />
        </figure>
        <div>
            <h3>{name}</h3>
            <p>$ {amount}</p>
            <button >agregar</button>
        </div>

    </article>
  )
}

export default ProductsCard
