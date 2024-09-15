import React from 'react'
import ProductsCard from './ProductsCard'

function ProductList({ data }) {
    
  return (
      data && data.map((ele, i) => {
        return <ProductsCard key={i} name = {ele.name} amount = {ele.amount}></ProductsCard>
    })
  )
}

export default ProductList
