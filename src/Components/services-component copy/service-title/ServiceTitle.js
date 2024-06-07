import React from 'react'

const ServiceTitle = ({title, subTitle}) => {
  return (
    <div className='w-[50%] py-12 text-center'>
      <h2 className='text-34/48 font-bold text-[#000000]'>{title}</h2>
        <p className='text-18/25 font-normal text-[#000000] mt-4'>{subTitle}</p>
    </div>
  )
}

export default ServiceTitle
