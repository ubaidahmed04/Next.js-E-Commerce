"use client"
import React, { Suspense, useEffect, useState } from 'react'
import {Loader, ProductDetail} from '@/components'
import Product11 from "@/app/public/Images/product11.png";
import ProductDetailSkeleton from './ProductDetailSkeleton';
import { getSingleProducts } from '@/app/API/response';
import { errorNotify } from '@/components/Toast';

const ProductDetails = ({params }) => {
  const { productId } = params;
  const [singleData,setSingleData] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  // console.log("productId",productId,params)
  const getSingleProduct = async() => {
    const route = `/product/get/${productId}  `
    try {
        setIsLoading(true)
        const response = await getSingleProducts(route)
        // console.log("response--->>>>", response)
        setSingleData(response.data)
        setIsLoading(false)
      } catch (error) {
        errorNotify(error ||response.message)
      }
  }
  useEffect(()=>{
    getSingleProduct()
  },[])
  return (
    <Suspense fallback={<ProductDetailSkeleton/>}>
      <span className='flex-grow max-w-screen-xl h-full'>
        {
          isLoading? <span className='flex-grow max-w-screen-xl h-screen'><Loader/></span> : 
       <ProductDetail url={singleData.file?singleData?.file[0]:Product11} title={singleData?.productname} price={singleData?.price}
        description={singleData?.description}/> 
        }
       </span>
    </Suspense>
  )
}

export default ProductDetails