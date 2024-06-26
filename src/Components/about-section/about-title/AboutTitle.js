import React from 'react'

const AboutTitle = ({title, desc,classes, span, workClasses,containerclass,pclass}) => {
  return (
    <div className={`px-[35px] md:max-w-[750px] pt-[16.5px] sm:pt-[35px] lg:pt-[63px] text-center ${containerclass}`}>
      <h1 className={` mb-[13px]  text-blue-color md:mb-[19px] ${classes} ${workClasses}`}>{title}</h1>
      <p className={`text-12/17 sm:text-14/18 md:text-18/25 text-blue-color font-medium ${pclass}`}>{desc} <span className='text-green-color'>{span}</span>
</p>
    </div>
  )
}

export default AboutTitle