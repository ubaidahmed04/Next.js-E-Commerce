import { CarouselDefault,ProductCard,Title } from '@/components'
import React from 'react'
import { HiArrowSmRight,HiArrowSmLeft } from "react-icons/hi";

const Contact = () => {
  return (
    <div>
      <CarouselDefault/>
      <Title title='Varieties' Subtitle='Flash Sales'/>

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-blue-600" >
        <HiArrowSmLeft/>
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-600">
        <HiArrowSmRight/>
        </button>
      </div>
      <span className='flex gap-4 items-center justify-center'>
      <ProductCard productName="Phone"/>
      <ProductCard productName="Phone"/>
      <ProductCard productName="Phone"/>
      <ProductCard productName="Phone"/>
      <ProductCard productName="Phone"/>
      <ProductCard productName="Phone"/>
      <ProductCard productName="Phone"/>
      <ProductCard productName="Phone"/>

      </span>
      <Title title='Product' Subtitle='Flash Sales'/>
    </div>
  )
}

export default Contact