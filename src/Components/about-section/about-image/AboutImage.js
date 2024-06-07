import React from 'react'
import Image from 'next/image'

const AboutImage = ({aboutHero}) => {
  return (
    <div className='w-full max-w-[1200px] h-[466px]'>
      <Image src={aboutHero}/>
    </div>
  )
}

export default AboutImage
