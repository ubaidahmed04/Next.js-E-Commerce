import React, { Suspense } from 'react'
import {ProductDetail} from '@/components'
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
import ProductDetailSkeleton from './ProductDetailSkeleton';
const products = {
  product1: { title: 'Product 1', price1: 1200, price2: 1500, imgUrl: Product1 },
  product2: { title: 'Product 2', price1: 1100, price2: 1400, imgUrl: Product2 },
  product3: { title: 'Product 3', price1: 1150, price2: 1450, imgUrl: Product3 },
  product4: { title: 'Product 4', price1: 1250, price2: 1550, imgUrl: Product4 },
  product5: { title: 'Product 5', price1: 1300, price2: 1600, imgUrl: Product5 },
  product6: { title: 'Product 6', price1: 1350, price2: 1650, imgUrl: Product6 },
  product7: { title: 'Product 7', price1: 1400, price2: 1700, imgUrl: Product7 },
  product8: { title: 'Product 8', price1: 1450, price2: 1750, imgUrl: Product8 },
  product9: { title: 'Product 9', price1: 1500, price2: 1800, imgUrl: Product9 },
  product10: { title: 'Product 10', price1: 1550, price2: 1850, imgUrl: Product10 },
  product11: { title: 'Product 11', price1: 1600, price2: 1900, imgUrl: Product11 },
};
const ProductDetails = ({params }) => {
  const { productId } = params;
  const product = products[productId];
  return (
    <Suspense fallback={<ProductDetailSkeleton/>}>
       <ProductDetail url={product.imgUrl} title={product.title} price={product.price1}/> 
    </Suspense>
  )
}

export default ProductDetails