import React from 'react'
import Product from './Product'

export default function ProductList(props) {
  return (
    <div>
  {props.productlist.map((product, i) => {
    return <Product product={product} key={i} />;
  })}
</div>

  )
}
