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
        // console.log("response--->>>>", response.data)
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
          isLoading? <span className='flex-grow max-w-screen-xl h-screen'><ProductDetailSkeleton/></span> : 
       <ProductDetail url={singleData.file?singleData?.file[0]:Product11} allFile={singleData.file} cartData={singleData} title={singleData?.productname} price={singleData?.price}
        description={singleData?.description}/> 
        }
       </span>
    </Suspense>
  )
}

export default ProductDetails

// export  function generateMetadata (){
//   return{
//     title :"Product Details",
//     description: `Explore a wide range of high-quality products at UbaidAhmed.store. Discover detailed product information, reviews, and easy shopping features. Add items to your cart, enjoy secure checkout, and get fast delivery. Shop now to enjoy exclusive offers and a seamless online shopping experience.`
//   }
// }
