"use client"
import React from 'react'
import Category1 from "@/app/public/Images/ModelImg.jpg";
import About1 from "@/app/public/Images/about1.png";
import About2 from "@/app/public/Images/about2.png";
import About3 from "@/app/public/Images/about3.png";
import { aboutimg1,aboutimg2,aboutimg3 } from "@/app/public/const/base64";
import Image from 'next/image';
import { UpperFooter }  from '@/components'
import {ProfileCard} from './AboutCard'
import { motion } from 'framer-motion'

export const AboutSection = () => {
  return (
    <div className='px-4'>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0 }}
         className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 w-full py-8 '>
            <Image
          height={200}
          width={300}
          src={Category1}
          
          alt="ui/ux review check"
          className="h-full w-full object-contain"
        />
            <span className='flex flex-col gap-4'>
                <span className='text-4xl myfont'>
                Our Story
                </span>
                <span className='text-xl myfont'>
                Launced in 2015, Exclusive is South Asias premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /> <br />
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                Exclusive has more than 1 Million. Exclusive offers a diverse assotment in categories ranging  from consumer.
                </span>
            </span>
           
        </motion.div>
        <span className='  grid grid-cols-2 md:grid-cols-4 gap-4 py-5'>
        <UpperFooter  subtitle='Sales active our sites' url={"https://img.freepik.com/free-vector/business-enterprise-strategy-market-analysis-niche-selection-conquering-marketplace-studying-market-segmentation-planning-company-development_335657-805.jpg?t=st=1732691929~exp=1732695529~hmac=3dbd6d49b9c3964f418def5c70d52c8873d1f7d0aca82d5003044bd00b337233&w=826"}  customStyle={'border-2'} target='10.5K' />
        <UpperFooter  subtitle='Monthly product sale' url={"https://img.freepik.com/free-photo/black-friday-concept-notebook_23-2148313084.jpg?t=st=1732691975~exp=1732695575~hmac=3241f1c3e589c621c9a8b3caf53285b77e39c24fc1bf633c8273b10e70583de1&w=1380"} customStyle={'border-2'} target='10.5K'/>
        <UpperFooter  subtitle='Customer active in site'  url={"https://img.freepik.com/free-vector/hand-drawn-illustrated-business-planning-concept_23-2149139708.jpg?t=st=1732692015~exp=1732695615~hmac=55dc850bd484f8978de8f4b50d77dee4979c26032e4b27efa6d23b43965526ea&w=826"} customStyle={'border-2'} target='10.5K'/>
        <UpperFooter  subtitle='Annual gross sale in site' url={"https://img.freepik.com/free-vector/payment-methods-with-shopping-basket_23-2147672989.jpg?t=st=1732692094~exp=1732695694~hmac=87ac40488828f0a9169d809b70eae8ba964220e9dbf8070afac9c93a7f5545b3&w=826"}  customStyle={'border-2'} target='10.5K'/>
        </span>
        <span className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full justify-items-center py-8'>
                <ProfileCard url={About1} base64url={aboutimg1}/>
                <ProfileCard url={About3} base64url={aboutimg2}/>
                <ProfileCard url={About2} base64url={aboutimg3}/>
        </span>
        <span>
        <motion.div 
     initial={{ opacity: 0, x: -100 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.4, delay: 0 }}
        className=' grid grid-cols-2 md:grid-cols-3   gap-2  py-5'>
        <UpperFooter title='Free And Fast Delivery' url={"https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?t=st=1732691469~exp=1732695069~hmac=f3a68f6d6005821ead01cc689f1d3a4f5a876a9ff25acb9f23b818978c2a4d85&w=826"} subtitle='free delivery for all orders over $140'/>
        <UpperFooter title='24/7 Customer Service' url={"https://img.freepik.com/free-vector/twenty-four-service_1017-30335.jpg?t=st=1732691574~exp=1732695174~hmac=7e6abf67ca539da75d5809c3c8c5e8a3c4adf062c09fe18a35aab9690bdcdd28&w=826"} subtitle='Friendly 24/7 customer support'/>
        <UpperFooter title='Money Back Guarantee' url={'https://img.freepik.com/free-vector/money-back-guarantee-sticker_1394-387.jpg?t=st=1732692160~exp=1732695760~hmac=bed0447b2ad138127761301f8d113b5764cb507e5a24453496ae8bf66879ef02&w=826'}  subtitle='we return money within 30 days'/>
        </motion.div>
        </span>
    </div>
  )
}
