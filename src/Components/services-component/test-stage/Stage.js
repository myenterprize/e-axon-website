import React from 'react'
import Image from 'next/image'

const Stage = ({stageData, elementColor}) => {

  const stage = stageData.map((item, i) => {
    return (
      <div key={i} className='w-full border-b-[10px] border-[#ffffff] last:border-none md:border-none md:max-w-[550px] px-[40px] py-[24px] lg:px-[58px] mb-[0px] md:mb-[50px]'>
      <h2 className='text-24/34 md:text-34/48 text-green-color font-bold pb-5 border-b-2 border-green-color' style={{color: elementColor, borderColor: elementColor}}>{item.No}</h2>
      <Image src={item.img} alt='stage process image' className='my-5' />
      <h3 className='text-16/22 md:text-24/34 font-[700] text-green-color' style={{color: elementColor}}>{item.title}</h3>
      <p className='text-12/15 md:text-16/22 font-[400] text-black'>{item.desc}</p>
    </div>
    )
  })

  return (
    <div className='scroll-section w-full h-auto overflow-y-visible md:w-[50%] md:h-[100%] md:overflow-y-auto mb-0 md:mb-[24px]'>
      {stage}
    </div>
  )
}

export default Stage
