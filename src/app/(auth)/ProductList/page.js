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
    ProductList
    </span>  
    <span>
        <ProductTable/>
    </span>
    </div>
  )
}

export default ProductList