import { Contact } from '@/components'
import React from 'react'

const Contacts = () => {
  return (
   <section className='px-4'>
   <Contact/>
   </section>
  )
}

export default Contacts
export  function generateMetadata (){
  return{
    title :"Contact Us",
    description: `Get in touch with Ubaid Ahmed's eCommerce store. For inquiries, support, or more information, reach out to us today. We are here to assist you with your orders and any other questions you may have. Visit our Contact page for more details.`
  }
}
