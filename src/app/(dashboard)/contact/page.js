"use client"
import { Contact } from '@/components'
import { motion } from 'framer-motion'
import React from 'react'

const Contacts = () => {
  return (
   <section className='px-4'>
    <motion.div 
    // initial={{ opacity: 0, y: 100 }}
    // animate={{ opacity: 1, y: 0 }}
    // transition={{ duration: 0.4, delay: 0 }}
    >

   <Contact/>
    </motion.div>
   </section>
  )
}

export default Contacts