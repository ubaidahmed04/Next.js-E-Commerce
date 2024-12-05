import React from 'react'
import ProductListClientPage from './ProductListClient'
const ProductList = () => {
  return (
    <>
    <ProductListClientPage />
    </>
  )
}

export default ProductList
export  function generateMetadata (){
  return{
    title :"Product list",
    description: `Welcome to Ubaid Ahmed Store! Discover a wide range of high-quality products across various categories. Learn about our mission to provide excellent service and seamless shopping experience. Explore our user-friendly platform, where you can easily add products to your cart, filter by categories, and enjoy secure online shopping with fast delivery. Our admin tools enable easy product management, while our customer-centric approach ensures satisfaction. Shop now at UbaidAhmed.store for the best deals and offers!`
  }
}