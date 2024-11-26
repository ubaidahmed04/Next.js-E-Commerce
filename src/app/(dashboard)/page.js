"use client"
import { CarouselDefault, Title, Category, ProductCard,Announcement,UpperFooter, } from '@/components'
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Category1 from "@/app/public/Images/Category1.png";
import Category2 from "@/app/public/Images/category2.png"
import Category3 from "@/app/public/Images/Category3.png";
import Category4 from "@/app/public/Images/Category4.png";
import Product1 from "@/app/public/Images/product1.png";
import Product2 from "@/app/public/Images/product2.png";
import Product3 from "@/app/public/Images/product3.png";
import Product4 from "@/app/public/Images/product4.png";
import Product5 from "@/app/public/Images/product5.png";
import Product6 from "@/app/public/Images/product6.png";
import Product7 from "@/app/public/Images/product7.png";
import Product8 from "@/app/public/Images/product8.png";
import Product9 from "@/app/public/Images/product9.png";
import Product10 from "@/app/public/Images/product10.png";
import Product11 from "@/app/public/Images/product11.png";
import Category6 from "@/app/public/Images/Category6.png";
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { DashboardSkeleton } from './dashboardSkeleton';
import { useSelector } from 'react-redux';
import { useInView, motion } from 'framer-motion';

// const CardDefault = lazy(() => import('@/components/Cards').then(module => ({ default: module.CardDefault })));
const ShowCard = lazy(() => import('@/components/ShowCard').then(module => ({ default: module.ShowCard })));
const Arrival = lazy(() => import('@/components/Arrival').then(module => ({ default: module.Arrival })));

const Home = () => {
  const [loading, setLoading] = useState(true);
  const {isUser} = useSelector((state)=>state.currUser)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }
  return (
    <div className='py-4'>

      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0 }} >
      <CarouselDefault />
      </motion.div>

      <div className='px-4'>
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
        <span className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 justify-items-center gap-2'>

          <ShowCard url={Product1} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product2} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product3} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product4} title='product 1' price1={1200} price2={1500} />
        </span>
  
        <Title title='Categories' Subtitle='Browse By Category' />
        <span className='flex gap-4 flex-wrap items-center justify-center'>
          <Category productName="Phone" url={Category1} />
          <Category productName="Computer" url={Category2} />
          <Category productName="Watch" url={Category3} />
          <Category productName="Camera" url={Category4} />
          <Category productName="Gaming" url={Category6} />
        </span>
        <span className=''>
        <Announcement/>
        </span>
        <Title title='Our Products' Subtitle='Explore Our Products' />
        <span className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 justify-items-center gap-2'>
          <ShowCard url={Product5} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product6} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product7} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product8} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product9} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product10} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product11} title='product 1' price1={1200} price2={1500} />
          <ShowCard url={Product5} title='product 1' price1={1200} price2={1500} />
        </span>
        <span className='py-5 flex items-center justify-center'>
          <Link href={'/products'}>
          <Button size="lg" className='text-center bg-secondary'>
            View All Products
          </Button>
          </Link>
        </span>
        <Title title='Featured' Subtitle='New Arrivals' />
        <Arrival/>

        <span className=''>
        <span className='justify-center sm:justify-around items-center flex flex-wrap '>
        <UpperFooter title='Free And Fast Delivery' subtitle='free delivery for all orders over $140'/>
        <UpperFooter title='24/7 customer service' subtitle='Friendly 24/7 customer support'/>
        <UpperFooter title='money back guarantee ' subtitle='we return money within 30 days'/>
        </span>
        </span>
      </div>

    </div>
  )
}

export default Home