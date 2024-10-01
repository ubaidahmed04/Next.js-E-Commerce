"use client"
import React, { useEffect, useState } from 'react'
import { Appbar,CardDefault } from '@/components'
import Product1 from "@/components/Images/product1.png";
import Product2 from "@/components/Images/product2.png";
import Product3 from "@/components/Images/product3.png";
import Product4 from "@/components/Images/product4.png";
import Product5 from "@/components/Images/product5.png";
import Product6 from "@/components/Images/product6.png";
import Product7 from "@/components/Images/product7.png";
import Product8 from "@/components/Images/product8.png";
import Product9 from "@/components/Images/product9.png";
import Product10 from "@/components/Images/product10.png";
import Product11 from "@/components/Images/product11.png";
import { useDispatch, useSelector } from 'react-redux';
import { gerProductStart, gerProductSuccess, gerProductFailed, } from '@/GlobalRedux/Slices/productSlice';
import { Button, IconButton } from "@material-tailwind/react";
        
import { HiArrowSmLeft, HiArrowSmRight  } from "react-icons/hi";
import { PiArrowCircleRight } from "react-icons/pi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
const Home = () => {
  const [limit,setLimit] = useState(10)
  const [skip,setSkip] = useState(0)
  const [active, setActive] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const maxButtons = 5; 
  console.log(totalPage)
  const {isProduct} = useSelector((state)=>state.product)
  const dispatch = useDispatch()

  useEffect(()=>{
    const getData = async()=>{
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
    try {
      dispatch(gerProductStart())
      const dataFetch = await  fetch(url)
      const res = await  dataFetch.json()
      console.log("response",res)
      const totalItems = res.total; // Assuming 'res.total' gives the total number of items from the API
      setTotalPage(Math.ceil(totalItems / limit));
      dispatch(gerProductSuccess(res.products))
    } catch (error) {
      console.log("error",error)
      dispatch(gerProductFailed())
    }
  }
  getData() 
  },[limit,skip])

  const handlePageClick = (pageNumber) => {
    setActive(pageNumber);
    setSkip((pageNumber - 1) * limit); // Calculate the skip value based on page number
  };

 const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => handlePageClick(index),
    className: "rounded-xl",
  });
  const next = () => {
    if (active === totalPage) return;
    setActive((prev) => prev + 1);
    setSkip(active * limit); // Update skip for the next page
  };

  const prev = () => {
    if (active === 1) return;
    setActive((prev) => prev - 1);
    setSkip((active - 2) * limit); // Update skip for the previous page
  };
  const getPaginationRange = () => {
    const start = Math.max(1, active - Math.floor(maxButtons / 2));
    const end = Math.min(totalPage, start + maxButtons - 1);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  console.log("isProduct",isProduct)

  return (
    <div className='font grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4'>
         <CardDefault url={Product5} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product6} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product7} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product8} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product9} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product10} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product11} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product5} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product1} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product2} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product3} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product4} title='product 1' price1={1200} price2={1500} />
          <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <HiArrowSmLeft strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
      {getPaginationRange().map((pageNumber) => (
          <IconButton
            key={pageNumber}
            variant={active === pageNumber ? "filled" : "text"}
            color={active === pageNumber ? "primary" : "gray"}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === totalPage}
      >
        Next
        <HiArrowSmRight strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
    </div>
  )
}

export default Home