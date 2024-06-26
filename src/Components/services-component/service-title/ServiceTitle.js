import React from 'react'

const ServiceTitle = ({title, subTitle,pclasses,containerclass,h2classes}) => {
  return (
    <div className={`px-[38px] pb-[11px] sm:py-8 lg:w-[50%] lg:pt-12 lg:pb-12 text-center ${containerclass}`}>
      <h2 className={`text-24/34 pt-[17px] sm:text-31/45 md:text-34/48 font-bold text-black ${h2classes}`}>{title}</h2>
        <p className={`pt-[18px] text-12/17 sm:text-14/18 lg:text-18/25 font-normal text-black md:mt-4 ${pclasses}`}>{subTitle}</p>
    </div>
  )
}

export default ServiceTitle
