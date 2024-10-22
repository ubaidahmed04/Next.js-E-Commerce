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
export const AboutSection = () => {
  return (
    <div className='px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 w-full py-8 '>
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
           
        </div>
        <span className='  grid grid-cols-2 md:grid-cols-4 gap-4 py-5'>
        <UpperFooter  subtitle='Sales active our sites'  customStyle={'border-2'} target='10.5K' />
        <UpperFooter  subtitle='Monthly product sale'  customStyle={'border-2'} target='10.5K'/>
        <UpperFooter  subtitle='Customer active in site'  customStyle={'border-2'} target='10.5K'/>
        <UpperFooter  subtitle='Annual gross sale in site'  customStyle={'border-2'} target='10.5K'/>
        </span>
        <span className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full justify-items-center py-8'>
                <ProfileCard url={About1} base64url={aboutimg1}/>
                <ProfileCard url={About3} base64url={aboutimg2}/>
                <ProfileCard url={About2} base64url={aboutimg3}/>
        </span>
        <span>
        <span className=' grid grid-cols-2 md:grid-cols-3   gap-2  py-5'>
        <UpperFooter title='Free And Fast Delivery' subtitle='free delivery for all orders over $140'/>
        <UpperFooter title='24/7 customer service' subtitle='Friendly 24/7 customer support'/>
        <UpperFooter title='money back guarantee ' subtitle='we return money within 30 days'/>
        </span>
        </span>
    </div>
  )
}
