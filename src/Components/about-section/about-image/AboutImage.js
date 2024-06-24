import React from 'react'
import Image from 'next/image'

const AboutImage = ({aboutHero}) => {
  return (
    <div className='pt-[33px] px-[13px] w-full sm:pt-[55px] sm:mx-2  lg:max-w-[1200px] md:h-[506px]'>
      <Image className='w-full h-full object-cover object-center' src={aboutHero} alt='about hero image'/>
    </div>
  )
}

export default AboutImage
