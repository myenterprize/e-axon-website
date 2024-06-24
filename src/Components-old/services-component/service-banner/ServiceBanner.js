import React from 'react'


const ServiceBanner = ({ banner, title, description }) => {
  return (
    <div className='w-[90%] h-[230px] md:h-[320px] lg:max-w-[80%] lg:h-[600px] relative mt-0 md:mt-8 mb-[65px] bg-cover' style={{ backgroundImage: `url(${banner.src})`, backgroundSize: 'cover' }}>
      <div className="detail w-[70%] lg:w-[40%] py-5 absolute left-1/2 bottom-[-140px] -translate-x-1/2 lg:right-5 lg:top-1/2 lg:-translate-x-[-90px] text-center lg:text-start">
        <h3 className='text-12/15 md:text-24/34 text-black font-bold px-[12px] md:px-8 pt-[8px] bg-white rounded-t-lg lg:rounded-lg mb-0 md:mb-5'>{title}</h3>
        <p className='text-12/15 md:text-14/18 text-black font-light px-[12px] md:px-8 py-[8px] bg-white rounded-b-lg md:rounded-lg mb-6' >{description}</p>
      </div>
    </div>
  )
}

export default ServiceBanner
