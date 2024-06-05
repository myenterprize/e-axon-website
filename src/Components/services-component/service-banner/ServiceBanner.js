import React from 'react'


const ServiceBanner = ({ banner, title, description }) => {
  return (
    <div className='w-full max-w-[80%] h-[600px] relative mt-8' style={{ backgroundImage: `url(${banner.src})`, backgroundSize: 'cover' }}>
      <div className="detail w-[40%] py-5 absolute right-5 top-1/2">
        <h3 className='text-24/34 text-[#000000] font-bold px-8 py-[8px] bg-white rounded-lg mb-5'>{title}</h3>
        <p className='text-14/18 text-[#000000] font-light px-8 py-[8px] bg-white rounded-lg mb-5' >{description}</p>
      </div>
    </div>
  )
}

export default ServiceBanner
