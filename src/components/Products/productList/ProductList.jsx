import React from 'react'
import ProductsCard from '../productCard/ProductsCard'
import "./productList.scss"

function ProductList({ data }) {
    
  return (
    <section className='section-showProducts container'>
      {
        data && data.map((ele, i) => {
          return <ProductsCard key={i} name = {ele.name} price = {ele.price} img = {ele.img}></ProductsCard>
        })
      }
     </section>
  )
}

export default ProductList
