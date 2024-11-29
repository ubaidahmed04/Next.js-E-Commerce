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
import { Option, Select ,Button} from '@material-tailwind/react';
import Link from 'next/link';
import { getCategorySuccess } from '@/app/Redux/Slices/category';

const Product = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch()
  const nextPage =()=>{
    setSkip((prevSkip) => prevSkip + limit);
  }
  const previousPage =()=>{
    setSkip((prevSkip) => Math.max(prevSkip - limit, 0)); 
  }
  const {allProducts,isLoader} = useSelector((state)=> state.allproducts)
  // console.log("redux allProducts",allProducts)

  const getAllProduct = async() => {
    const route = `/product?limit=${limit}&skip=${skip}${category ? `&category=${category}` : ""}`;  
    try {
      dispatch(getProductStart())
        const response = await getAllProducts(route)
        // console.log("response--->>>>", response)
        dispatch(getProductSuccess(response.data))
      } catch (error) {
        errorNotify(error ||response.message)
      }
  
  }
  // add tocart 
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  // filter product by category 
  const handleCategoryChange = (value) =>{
    setCategory(value)
    setSkip(0)
  }
  useEffect(()=>{
    getAllProduct()
  },[ limit, skip, category])
// get all  category 
const { getCategory } = useSelector((state) => state.category);
console.log("getCategory",getCategory)
const GetCategory = async () => {
  const route = '/category'  
  try {
    const response = await getAllProducts(route)
    // console.log("response--->>>>", response.data)
    dispatch(getCategorySuccess(response?.data))
  } catch (error) {
    console.log(error)
    // errorNotify(error ||response.message)
  }
}
useEffect(()=>{
  GetCategory()
},[])

  return (
    <Suspense fallback={<ProductSkeleton/>}>
     {   isLoader ?<div className='  w-full  mx-auto '><ProductSkeleton/></div>:
     
        allProducts?.length < 1 ? <div className="flex justify-center  items-center min-h-screen  mx-auto max-w-4xl text-4xl flex-col  ">Currently, there are no products available. Stay tuned—exciting new items are coming soon! <Link href={'/'}><Button className="bg-secondary text-white ">Back</Button></Link></div> :
        <>
        <span className='w-full sm:w-1/2 flex ml-auto justify-end pt-4'>
        <Select
          className="w-full !border-[1.5px]  !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
          label="Filter Product By Category"
          value={category}
          onChange={(value) => handleCategoryChange(value)}
        >
           {
          getCategory?.map((opt ,idx)=>(
            <Option key={idx} value={`${opt?._id.toString()}`} >{opt?.categoryName|| "No category Avalaible"}</Option>
          ))
        }
          
        </Select>
        </span>
        <div className='font grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4 pb-10 pt-4 flex-grow max-w-screen-xl  w-full min-h-screen max-h-full '>
      { allProducts.map((item,index)=>(
        
            <CardDefault key={index} url={item?.file[0]} navigate={item._id} title={item?.productname} price1={item?.price} price2={`${item?.price }`} quantity={item?.quantity} onAddToCart={() => handleAddToCart(item)} />
          ))}
          
        </div>
        <span className={allProducts.length == 0 ? ' justify-center items-center py-4 hidden':'flex justify-center items-center py-4'}>
          <DefaultPagination nextPage={nextPage} previousPage={previousPage}/>
        </span>
        </>
        }
       
    </Suspense>
  )
}

export default Product