import React from 'react'

const ServiceTitle = ({title, subTitle}) => {
  return (
    <div className='px-[38px] pb-[20px] sm:py-8 lg:w-[50%] lg:py-12 text-center'>
      <h2 className='text-24/34 py-[11.5px] sm:text-31/45 md:text-34/48 font-bold text-black'>{title}</h2>
        <p className='pt-[10px] text-12/17 sm:text-14/18 md:text-18/25 font-normal text-black md:mt-4'>{subTitle}</p>
    </div>
  )
}

export default ServiceTitle
