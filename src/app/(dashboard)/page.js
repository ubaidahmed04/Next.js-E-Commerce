// "use client"
import { CarouselDefault, Title, Category, ProductCard,Announcement,UpperFooter,ShowCard ,Arrival ,ButtonComp} from '@/components'
import Link from 'next/link';
// import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
// import React, { lazy,  } from 'react'
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
// import { Button } from '@material-tailwind/react';
// import { DashboardSkeleton } from './dashboardSkeleton';
// import { useSelector } from 'react-redux';
// import { useInView, motion } from 'framer-motion';

// const CardDefault = lazy(() => import('@/components/Cards').then(module => ({ default: module.CardDefault })));
// const ShowCard = lazy(() => import('@/components/ShowCard').then(module => ({ default: module.ShowCard })));
// const Arrival = lazy(() => import('@/components/Arrival').then(module => ({ default: module.Arrival })));

const Home = () => {
  // const [loading, setLoading] = useState(true);
  // const {isUser} = useSelector((state)=>state.currUser)
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 10);

  //   return () => clearTimeout(timeout);
  // }, []);

  // if (loading) {
  //   return <DashboardSkeleton />;
  // }
  return (
    <div className='py-4'>

      {/* <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0 }} >
      </motion.div> */}
      <CarouselDefault />

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
          <ButtonComp text={'View All Products'}/>
          </Link>
        </span>
        <Title title='Featured' Subtitle='New Arrivals' />
        <Arrival/>

        <span className=''>
        <span className='justify-center sm:justify-around items-center flex flex-wrap '>
        <UpperFooter title='Free And Fast Delivery' url={"https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?t=st=1732691469~exp=1732695069~hmac=f3a68f6d6005821ead01cc689f1d3a4f5a876a9ff25acb9f23b818978c2a4d85&w=826"} subtitle='free delivery for all orders over $140'/>
        <UpperFooter title='24/7 Customer Service' url={"https://img.freepik.com/free-vector/twenty-four-service_1017-30335.jpg?t=st=1732691574~exp=1732695174~hmac=7e6abf67ca539da75d5809c3c8c5e8a3c4adf062c09fe18a35aab9690bdcdd28&w=826"} subtitle='Friendly 24/7 customer support'/>
        <UpperFooter title='Money Back Guarantee' url={'https://img.freepik.com/free-vector/money-back-guarantee-sticker_1394-387.jpg?t=st=1732692160~exp=1732695760~hmac=bed0447b2ad138127761301f8d113b5764cb507e5a24453496ae8bf66879ef02&w=826'}  subtitle='we return money within 30 days'/>
        </span>
        </span>
      </div>

    </div>
  )
}

export default Home

export  function generateMetadata (){
  return{
    title :"UA Store",
    description: `Discover the ultimate shopping experience at UbaidAhmed.Store! Explore a wide range of products with category-wise browsing, seamless Add to Cart functionality, and secure checkout. Designed with Next.js and powered by Redux Toolkit for state management, our platform ensures fast, efficient, and reliable service. Join us now and shop with ease!`
  }
}
