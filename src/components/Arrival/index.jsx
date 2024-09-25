"use client"
import Image from 'next/image'
import React from 'react'
import Arrival1 from "@/components/Images/arrival1.png";
import Arrival2 from "@/components/Images/arrival2.png";
import Arrival3 from "@/components/Images/arrival3.png";
import Arrival4 from "@/components/Images/arrival4.png";

export const Arrival = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2  gap-2 py-2'>
      <span className='bg-black h-full relative  text-white overflow-hidden'>
        <Image
          src={Arrival1}
          height={200}
          width={400}
          alt="image 2"
          className="h-64 md:h-72 lg:h-[700px] xl:h-full w-full object-contain"
        />
        <span className='flex flex-col absolute  bottom-20    opacity-1 px-5 gap-4'>

          <span className='text-xl myfont'>
            Play Station 5
          </span>
          <span className='text-sm font-light myfont'>
            Black and White version of the PS5 coming out on sale.
          </span>
          <span className='cursor-pointer'>
            Shop Now
          </span>
        </span>
      </span>
      <span className=' grid grid-rows-2 gap-2'>
        <span className='text-white relative bg-black'>
          <Image
            src={Arrival2}
            height={200}
            width={400}
            alt="image 2"
            className="h-64 md:h-72 lg:h-[700px] xl:h-full w-full object-contain"
          />
          <span className='flex flex-col absolute  bottom-20 opacity-1 px-5 gap-4'>

            <span className='text-xl myfont'>
              play Station 5
            </span>
            <span className='text-sm font-light myfont'>
              Black and White version of the PS5 coming out on sale.
            </span>
            <span className='cursor-pointer'>
              Shop Now
            </span>
          </span>

        </span>
        <span className='grid grid-cols-2 gap-2'>
          <span className='text-white  w-full object-contain bg-black relative  overflow-hidden'>
            <Image
              src={Arrival3}
              height={200}
              width={400}
              alt="image 2"
              className="h-64 md:h-72 lg:h-[700px] xl:h-full  w-full object-contain"
            />
            <span className='flex flex-col absolute  bottom-6 md:bottom-20 opacity-1  px-5 gap-4'>
              <span className='text-xl myfont'>
                play Station 5
              </span>
              <span className='text-sm font-light myfont'>
                Black and White version of the PS5 coming out on sale.
              </span>
              <span className='cursor-pointer'>
                Shop Now
              </span>
            </span>

          </span>
          <span className='text-white bg-black relative  w-full object-contain overflow-hidden'>
            <Image
              src={Arrival4}
              height={200}
              width={400}
              alt="image 2"
              className="h-64 md:h-72 lg:h-[700px] xl:h-full w-full object-contain"
            />
            <span className='flex flex-col absolute  bottom-6 md:bottom-20  opacity-1 px-5 gap-4'>
              <span className='text-xl myfont'>
                play Station 5
              </span>
              <span className='text-sm font-light myfont'>
                Black and White version of the PS5 coming out on sale.
              </span>
              <span className='cursor-pointer'>
                Shop Now
              </span>
            </span>

          </span>
        </span>
      </span>

    </div>
  )
}
