import React from 'react'
import Image from 'next/image'

const Stage = ({stageData, elementColor}) => {

  const stage = stageData.map((item, i) => {
    return (
      <div key={i} className='w-full md:max-w-[550px] px-[20px] py-[16px] lg:px-[58px] mb-5'>
      <h2 className='text-24/34 md:text-34/48 text-green-color font-bold pb-5 border-b-2 border-green-color' style={{color: elementColor, borderColor: elementColor}}>{item.No}</h2>
      <Image src={item.img} alt='stage process image' className='my-5' />
      <h3 className='text-16/22 md:text-24/34 font-[700] text-green-color' style={{color: elementColor}}>{item.title}</h3>
      <p className='text-12/15 md:text-16/22 font-[400] text-black'>{item.desc}</p>
    </div>
    )
  })

  return (
    <div className='w-[100%] md:w-[50%]'>
      {stage}
    </div>
  )
}

export default Stage
