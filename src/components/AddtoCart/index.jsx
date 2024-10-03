import React from 'react'
import {PaymentCard} from './paymentCard'
import {StepperCard} from './steps'
export const  AddCart = () => {
  return (
    <div className='py-5 grid  grid-cols-1 md:grid-cols-2 '>
      <span>
        <span className='fontbold text-4xl'>Your Cart</span>
        <span>
        <StepperCard/>
        </span>
      </span>
      <span>
      <PaymentCard/>
      </span>
    </div>
  )
}
