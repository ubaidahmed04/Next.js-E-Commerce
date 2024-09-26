import React from 'react'
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
const AllProduct = () => {
  return (
    <div className='font grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4'>
         <CardDefault url={Product5} title='product 1' price1={1640} price2={1220} />
          <CardDefault url={Product6} title='product 2' price1={1560} price2={1200} />
          <CardDefault url={Product7} title='product 3' price1={1340} price2={1300} />
          <CardDefault url={Product8} title='product 4' price1={1500} price2={1400} />
          <CardDefault url={Product9} title='product 5' price1={1800} price2={1600} />
          <CardDefault url={Product10} title='product 6' price1={1700} price2={1600} />
          <CardDefault url={Product11} title='product 7' price1={1600} price2={1560} />
          <CardDefault url={Product5} title='product 8' price1={1400} price2={1130} />
          <CardDefault url={Product1} title='product 9' price1={1300} price2={1120} />
          <CardDefault url={Product2} title='product 10' price1={1300} price2={1250} />
          <CardDefault url={Product3} title='product 11' price1={1340} price2={1230} />
          <CardDefault url={Product4} title='product 12' price1={1430} price2={1230} />
    </div>
  )
}

export default AllProduct