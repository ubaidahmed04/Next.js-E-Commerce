"use client"
import React from 'react'
import { Button } from '@material-tailwind/react';

const ButtonComp = ({text}) => {
  return (
    <div>
      <Button size="lg" className='text-center bg-secondary'>
            {text}
          </Button>
    </div>
  )
}

export default ButtonComp