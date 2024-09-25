"use client"
import { CarouselDefault, Title, Category, ProductCard, CardDefault,Announcement,UpperFooter,Arrival } from '@/components'
import React from 'react'
import Category1 from "@/components/Images/Category1.png";
import Categort from '@/components/Images/Category2.png'
import Category3 from "@/components/Images/Category3.png";
import Category4 from "@/components/Images/Category4.png";
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
import Category6 from "@/components/Images/Category6.png";
import { Button } from '@material-tailwind/react';

const Home = () => {
  return (
    <div className='py-4'>
      <CarouselDefault />
      <div className='px-4'>

        {/* Today sale product card section */}
        <Title title='Todays' Subtitle='Flash Sales' />
        <span className='flex gap-3 items-center mt-4 '>
          <span className='flex flex-col justify-center'>
            <span className='font-bold'>days</span>
            <span className='font-black text-xl md:text-4xl '>03 :</span>
          </span>
          <span className='flex flex-col justify-center'>
            <span className='font-bold'>Hours</span>
            <span className='font-black text-xl md:text-4xl '>12 :</span>
          </span>
          <span className='flex flex-col justify-center'>
            <span className='font-bold'>Minutes</span>
            <span className='font-black text-xl md:text-4xl '>03 :</span>
          </span>
          <span className='flex flex-col justify-center'>
            <span className='font-bold'>Seconds</span>
            <span className='font-black text-xl md:text-4xl '>03 </span>
          </span>

        </span>
        <span className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-3 justify-items-center gap-2'>

          <CardDefault url={Product1} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product2} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product3} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product4} title='product 1' price1={1200} price2={1500} />
        </span>
        {/* categories section */}

        <Title title='Categories' Subtitle='Browse By Category' />
        <span className='flex gap-4 flex-wrap items-center justify-center'>
          <Category productName="Phone" url={Category1} />
          <Category productName="Computer" url={Categort} />
          <Category productName="Watch" url={Category3} />
          <Category productName="Camera" url={Category4} />
          <Category productName="Gaming" url={Category6} />

        </span>
        {/* this announcement section */}
        <span className=''>
        <Announcement/>
        </span>
        {/* This month sales section */}
        <Title title='Our Products' Subtitle='Explore Our Products' />
        <span className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-3 justify-items-center gap-2'>
          <CardDefault url={Product5} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product6} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product7} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product8} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product9} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product10} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product11} title='product 1' price1={1200} price2={1500} />
          <CardDefault url={Product5} title='product 1' price1={1200} price2={1500} />
        </span>
        <span className='py-5 flex items-center justify-center'>
          <Button size="lg" className='text-center bg-secondary'>
            View All Products
          </Button>
        </span>
        {/* New Arrival section */}
        <Title title='Featured' Subtitle='New Arrivals' />
        <Arrival/>

        {/* Upper Footer section */}
        <span className=' justify-between flex flex-wrap  '>
        <UpperFooter title='Free And Fast Delivery' subtitle='free delivery for all orders over $140'/>
        <UpperFooter title='24/7 customer service' subtitle='Friendly 24/7 customer support'/>
        <UpperFooter title='money back guarantee ' subtitle='we return money within 30 days'/>
        </span>
      </div>

    </div>
  )
}

export default Home