import React from 'react'
import { HiArrowSmRight,HiArrowSmLeft } from "react-icons/hi";

export const Title = ({title,Subtitle}) => {
  return (
    <>
    <span className='text-secondary flex  items-center gap-4  py-4 rounded-lg'>
        <span className=' bg-secondary text-secondary  rounded-lg py-6 px-4 myfont'></span>
        {title}
        </span>
    <div className='flex justify-between items-center myfont'>
    <span>
        <span className='text-xl md:text-4xl  text-black font-black'>
            {Subtitle}
        </span>
      </span>   
        <span>

        <button className="px-4 py-2 mr-2 bg-gray-300 text-white rounded hover:bg-blue-600" >
        <HiArrowSmLeft color='black'/>
        </button>
        <button className="px-4 py-2 bg-gray-300 text-white rounded hover:bg-blue-600">
        <HiArrowSmRight color='black'/>
        </button>
        </span>

        </div>
        </>
  )
}
