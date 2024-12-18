"use client"
import Image from 'next/image'
import React from 'react'
import img2 from "@/app/public/Images/herosection.png";
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

 export const Announcement = () => {
  return (
    <div className='my-8 py-8 bg-black w-full flex  md:flex-row-reverse flex-col  px-4'>
      <span>

     <Image
        src={img2}
        height={200}
        width={400}
        alt="image 2"
        className="h-64 md:h-72 lg:h-80  w-full object-contain"
      />
      </span>
      <span className='flex flex-col gap-8 justify-center'>
        <span className=' text-lg'>
          <p className='text-green '>
          Categories
            </p>
          </span>
        <span className='text-2xl md:text-4xl text-white'>Enhance Your Music Experience</span>
        <span className='flex gap-2 items-center  text-white  flex-wrap'>
          <span className='flex flex-col text-center justify-center bg-white text-black rounded-full p-2'>
            <span className='fontbold'>days</span>
            <span className='font-black text-xl md:text-2xl '>03</span>
          </span>
          <span className='flex flex-col  text-center justify-center bg-white text-black rounded-full p-2'>
            <span className='fontbold'>Hours</span>
            <span className='font-black text-xl md:text-2xl '>12</span>
          </span>
          <span className='flex flex-col  text-center justify-center bg-white text-black rounded-full p-2'>
            <span className='fontbold'>Minutes</span>
            <span className='font-black text-xl md:text-2xl '>03</span>
          </span>
          <span className='flex flex-col  text-center justify-center bg-white text-black rounded-full p-2'>
            <span className='fontbold'>Seconds</span>
            <span className='font-black text-xl md:text-2xl '>03 </span>
          </span>

        </span>
        <span>
          <Link href={'/products'}>
          <Button className='bg-green'>
            Buy Now
          </Button>
          </Link>
        </span>
      </span>
    </div>
  )
}
