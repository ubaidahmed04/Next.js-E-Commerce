import React from 'react'
import ProductClinetSide from './ProductsClientPage'

const Products = () => {
  return (
    <>
    <ProductClinetSide/>
    </>
  )
}

export default Products


export  function generateMetadata (){
  return{
    title :"Products",
    description: `Explore a wide range of quality products at UbaidAhmed.store. Browse, filter, and shop your favorite items with ease. From fashion to electronics, our collection offers something for everyone. Enjoy seamless shopping experience with the ability to add products to your cart, and place your order securely. Visit now for amazing deals and offers!`
  }
}