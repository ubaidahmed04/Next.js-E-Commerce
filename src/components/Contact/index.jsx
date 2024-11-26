"use client"
import React, { Suspense } from 'react'
import { ContactForm } from './Contactform'
import { motion } from 'framer-motion'

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { IoCallOutline } from "react-icons/io5";
import { ContactSkeleton } from './ContactSkeleton';
import Link from 'next/link';
export const Contact = () => {
  return (
    <Suspense fallback={<ContactSkeleton/>} >
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start  py-8 mx-auto'>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            >
            <Card className="mt-6 w-72 sm:w-96 shadow-lg ">
      <CardBody className='flex flex-col gap-4'>
        <span className='flex items-center gap-4'>
            <span>
        <IoCallOutline size={20} className='bg-secondary p-2 w-12 rounded-full h-12 text-white '/>
            </span>
        <span className='text-md md:text-xl myfont'>
            Call To Us
        </span>
        </span>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-md md:text-xl ">
        We are available 24/7, 7 days a week.
        </Typography>
        <Typography>
        Phone: +92 312 7718780
        </Typography>
        <Typography className="py-6 border-b-4">
        </Typography>
        <span className='flex items-center gap-4'>
            <span>
        <IoCallOutline size={20}  color='#fff' className='bg-secondary p-2 w-12 rounded-full h-12 text-white'/>
            </span>
        <span className=' myfont text-md md:text-xl'>
            Write To Us
        </span>
        </span>
        <Typography variant="h5" color="blue-gray" className="mb-2  text-md md:text-xl">
        Fill out our form and we will contact you within 24 hours.
        </Typography>
        <Typography>
        Emails: ubaidahmed2040@gmail.com
        </Typography>
        <Typography>
        linkedIn : <Link className='hover:cursor-pointer hover:underline hover:text-blue-gray-400' href={'https://www.linkedin.com/in/ubaidahmed04/'}>UbaidAhmed</Link>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      </CardFooter>
    </Card>
            </motion.div>
            <span className='py-4 lg:py-0'>
                <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                >

                <ContactForm/>
                </motion.div>
            </span>
        </div>
    </Suspense>
  )
}
