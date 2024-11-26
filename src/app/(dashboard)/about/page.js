import { Varieties } from '@/components'
import React, { Suspense } from 'react'
import {AboutSection}  from '@/components'
import AboutSectionSkeleton from './AboutSkeleton'
const About = () => {
  return (
    <Suspense fallback={<AboutSectionSkeleton/>}>
      
      <AboutSection/>
    </Suspense>
  )
}

export default About