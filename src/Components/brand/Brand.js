"use client"
import React from 'react'
import BrandBg from '@/assets/svgs/square-pattern-balck.svg'
import Image from 'next/image'

const Brand = ({logo, title}) => {


  return (
    <div className='w-full max-w-[326px] h-[150px] sm:max-w-[584px] sm:h-[209px] mx-auto relative flex flex-col justify-center items-center gap-0 md:gap-3 px-[15px]' style={{ backgroundImage: `url(${BrandBg.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <Image className='w-full max-w-[100px] max-h-[60px] sm:max-w-[198px] md:max-h-[99px]' src={logo} alt="logo"/>
      <p className='text-14/18 sm:text-18/25 text-center font-bold p-0 md:p-5 bg-white'>{title}</p>
    </div>
  )
}

export default Brand
