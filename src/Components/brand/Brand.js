"use client"
import React from 'react'
import BrandBg from '@/assets/svgs/square-pattern-balck.svg'
import Image from 'next/image'

const Brand = ({logo, title}) => {


  return (
    <div className='w-full max-w-[584px] h-[209px] mx-auto relative flex flex-col justify-center items-center gap-3' style={{ backgroundImage: `url(${BrandBg.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <Image className='w-full max-w-[198px]' src={logo} alt="edge"/>
      <p className='text-18/25 text-center font-bold p-5 bg-white'>{title}</p>
    </div>
  )
}

export default Brand
