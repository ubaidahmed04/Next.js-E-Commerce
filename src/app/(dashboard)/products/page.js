"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { CardDefault, Loader } from '@/components'
import { ProductSkeleton } from './productSkeleton';
import { getAllProducts } from '@/app/API/response';
import { errorNotify, successNotify } from '@/components/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { getProductStart, getProductSuccess } from '@/app/Redux/Slices/allProducts';
import { addToCart } from '@/app/Redux/Slices/addToCart';
import { DefaultPagination } from './Paginition';

const Product = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch()
  // let limit = 10
  // let skip = 0
  const nextPage =()=>{
    setSkip((prevSkip) => prevSkip + limit);
  }
  const previousPage =()=>{
    setSkip((prevSkip) => Math.max(prevSkip - limit, 0)); 
  }
  const {allProducts,isLoader} = useSelector((state)=> state.allproducts)
  console.log("redux allProducts",allProducts)
  const getAllProduct = async() => {
    const route = `/product?limit=${limit}&skip=${skip}`;  
    try {
      dispatch(getProductStart())
        const response = await getAllProducts(route)
        console.log("response--->>>>", response)
        dispatch(getProductSuccess(response.data))
        
        
      } catch (error) {
        errorNotify(error ||response.message)
      }
  
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(()=>{
    getAllProduct()
  },[limit,skip])

  return (
    <Suspense fallback={<ProductSkeleton/>}>
     {   isLoader ?<div className='  w-full  mx-auto '><Loader/></div>:
      <div className='font grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4 pb-10 pt-4 flex-grow max-w-screen-xl  w-full min-h-screen max-h-full mx-auto'>
     
       { allProducts.map((item,index)=>(
            <CardDefault key={index} url={item?.file[0]} navigate={item._id} title={item?.productname} price1={item?.price} price2={item?.price*250} onAddToCart={() => handleAddToCart(item)}/>
          ))
        }
        </div>}
        <span className='flex justify-center items-center py-4'>
          <DefaultPagination nextPage={nextPage} previousPage={previousPage}/>

        </span>
    </Suspense>
  )
}

export default Product