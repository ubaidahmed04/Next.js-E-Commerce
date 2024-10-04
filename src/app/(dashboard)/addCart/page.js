import { AddCart } from '@/components'
import React, { Suspense } from 'react'
import { AddCartSkeleton } from './AddCartSkeleton'

const AddToCart = () => {
  return (
   <Suspense fallback={<AddCartSkeleton/>}>
   <AddCart/>
   </Suspense>
  )
}

export default AddToCart