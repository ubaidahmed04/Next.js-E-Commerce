"use client"
import React from 'react'
import { ContactForm } from './Contactform'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { IoCallOutline } from "react-icons/io5";
export const Contact = () => {
  return (
    <div >
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start  py-8 mx-auto'>
            <span >
            <Card className="mt-6 w-96 shadow-lg">
      <CardBody className='flex flex-col gap-4'>
        <span className='flex items-center gap-4'>
            <span>
        <IoCallOutline size={20} className='bg-secondary p-2 w-12 rounded-full h-12 text-white '/>
            </span>
        <span className='text-xl myfont'>
            Call To Us
        </span>
        </span>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        We are available 24/7, 7 days a week.
        </Typography>
        <Typography>
        Phone: +8801611112222
        </Typography>
        <Typography className="py-6 border-b-4">
        </Typography>
        <span className='flex items-center gap-4'>
            <span>
        <IoCallOutline size={20}  color='#fff' className='bg-secondary p-2 w-12 rounded-full h-12 text-white'/>
            </span>
        <span className='text-xl myfont '>
            Write To Us
        </span>
        </span>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Fill out our form and we will contact you within 24 hours.
        </Typography>
        <Typography>
        Emails: customer@exclusive.com
        </Typography>
        <Typography>
        Emails: support@exclusive.com
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      </CardFooter>
    </Card>
            </span>
            <span>
                <ContactForm/>
            </span>
        </div>
    </div>
  )
}
