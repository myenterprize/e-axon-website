import React from 'react'
import Image from 'next/image'

const AboutImage = ({aboutHero,classes}) => {

  return (
    <div className={`pt-[28px] px-[13px] w-full sm:pt-[44px] sm:mx-2  lg:max-w-[1200px] md:h-[506px] ${classes}`}>
      <Image className='w-full h-full object-cover object-center' src={aboutHero} alt='about hero image'/>
    </div>
  )
}

export default AboutImage
