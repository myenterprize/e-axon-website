import React from 'react'


const ServiceBanner = ({ banner, title, description, margin }) => {
  return (
    <div className='w-[91%] h-[230px] md:h-[320px] lg:max-w-[80%] lg:h-[600px] relative mt-0 md:mt-[65px]  mb-[140px] lg:mb-[0px] bg-cover' style={{ backgroundImage: `url(${banner.src})`, backgroundSize: 'cover', marginBottom: margin }}>
      <div className="detail w-[70%] lg:w-[40%] md:py-5 drop-shadow-md absolute left-1/2 top-[180px] -translate-x-1/2 lg:right-5 lg:top-1/2 lg:-translate-x-[-90px] text-center lg:text-start">
        <h3 className='text-12/15 md:text-24/34 text-black font-bold px-[12px] md:px-8 pt-[20px] md:py-[8px] bg-white rounded-t-lg lg:rounded-lg mb-0 md:mb-5'>{title}</h3>
        <p className='text-12/15 md:text-14/18 text-black font-light px-[12.5px] md:px-8 pt-[8px] pb-[14px] bg-white rounded-b-lg md:rounded-lg ' >{description}</p>
      </div>
    </div>
  )
}

export default ServiceBanner
