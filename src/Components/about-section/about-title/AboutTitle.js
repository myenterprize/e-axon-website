import React from 'react'

const AboutTitle = ({title, desc,classes, span, workClasses}) => {
  return (
    <div className={`ps-[33px] pe-[32px] pt-[16.5px] md:max-w-[750px]  md:pt-[63px] text-center`}>
      <h1 className={` mb-[11px]  sm:pt-[35px]  text-blue-color md:mb-[19px] ${classes} ${workClasses}`}>{title}</h1>
      <p className={`text-12/17 sm:text-14/18 md:text-18/25 text-blue-color font-medium`}>{desc} <span className='text-green-color'>{span}</span>
</p>
    </div>
  )
}

export default AboutTitle
