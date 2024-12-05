import React from 'react'
import { AddProductClient } from './AddProductClient'

const AddProduct = () => {
  return (
    <>
    <AddProductClient/>
    </>
  )
}

export default AddProduct
export  function generateMetadata (){
  return{
    title :"Add Product",
    description: `Welcome to Ubaid Ahmed Store! Discover a wide range of high-quality products across various categories. Learn about our mission to provide excellent service and seamless shopping experience. Explore our user-friendly platform, where you can easily add products to your cart, filter by categories, and enjoy secure online shopping with fast delivery. Our admin tools enable easy product management, while our customer-centric approach ensures satisfaction. Shop now at UbaidAhmed.store for the best deals and offers!`
  }
}