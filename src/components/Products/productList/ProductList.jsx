import React from 'react'
import ProductsCard from '../productCard/ProductsCard'
import "./productList.scss"

function ProductList({ data }) {
    
  return (
    <section className='section-showProducts'>
      {
        data && data.map((ele, i) => {
          return <ProductsCard key={i} product= {ele} ></ProductsCard>
        })
      }
     </section>
  )
}

export default ProductList
