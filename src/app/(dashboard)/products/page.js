"use client"
import React from 'react'
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
import { CardDefault } from '@/components'
import Link from 'next/link';

const Product = () => {
  return (
    <div className='font grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4'>
      {/* <Link href={`/products/product5`}> */}
      <CardDefault url={Product5} navigate={'/product5'} title='product 5' price1={1200} price2={1500} />
      {/* </Link> */}
      <CardDefault url={Product6} navigate={'/product6'} title='product 6' price1={1200} price2={1500} />
      <CardDefault url={Product7} navigate={'/product7'} title='product 7' price1={1200} price2={1500} />
      <CardDefault url={Product8} navigate={'/product8'} title='product 8' price1={1200} price2={1500} />
      <CardDefault url={Product9} navigate={'/product9'} title='product 9' price1={1200} price2={1500} />
      <CardDefault url={Product10} navigate={'/product10'} title='product 10' price1={1200} price2={1500} />
      <CardDefault url={Product11} navigate={'/product11'} title='product 11' price1={1200} price2={1500} />
      <CardDefault url={Product5} navigate={'/product5'} title='product 5' price1={1200} price2={1500} />
      <CardDefault url={Product4} navigate={'/product4'} title='product 4' price1={1200} price2={1500} />
      <CardDefault url={Product3} navigate={'/product3'} title='product 3' price1={1200} price2={1500} />
      <CardDefault url={Product2} navigate={'/product2'} title='product 2' price1={1200} price2={1500} />
      <CardDefault url={Product1} navigate={'/product1'} title='product 1' price1={1200} price2={1500} />

     
    </div>
  )
}

export default Product