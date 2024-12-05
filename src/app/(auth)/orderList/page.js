"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {ProductTable} from '@/components'
const ProductList = () => {
  const { isUser } = useSelector((state) => state.currUser)
    const router = useRouter()
    useEffect(() => {
        if (!isUser || isUser.email !== "admin@gmail.com") {
          router.push('/');
        }
      }, [isUser, router]);
  return (
    <div className='w-full h-full'>
      <span className='text-xl font-bold flex items-center justify-center text-center w-full h-full'>
    Order Request List
    </span>  
    <span>
        <ProductTable/>
    </span>
    </div>
  )
}

export default ProductList
export  function generateMetadata (){
  return{
    title :"Order",
    description: `Welcome to Ubaid Ahmed Store! Discover a wide range of high-quality products across various categories. Learn about our mission to provide excellent service and seamless shopping experience. Explore our user-friendly platform, where you can easily add products to your cart, filter by categories, and enjoy secure online shopping with fast delivery. Our admin tools enable easy product management, while our customer-centric approach ensures satisfaction. Shop now at UbaidAhmed.store for the best deals and offers!`
  }
}