import React from 'react'
import Image from 'next/image'
import AWSLogo from '@/assets/svgs/AWS.svg'
import HTMLLogo from '@/assets/svgs/HTML.svg'
import JavaScriptLogo from '@/assets/svgs/JavaScript.svg'
import JSLogo from '@/assets/svgs/JS.svg'
import ReactJsLogo from '@/assets/svgs/React-JS.svg'

const Technology = () => {
  return (
    <div className='w-full h-auto lg:w-[500px] lg:h-[80px] flex justify-center lg:justify-start items-center gap-x-[20px] lg:gap-0'>
      <Image className='w-[40px] h-[40px] md:w-[70px]  md:h-[70px]  lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]' src={AWSLogo} alt='AWS logo' />
      <Image className='w-[40px] h-[40px] md:w-[70px]  md:h-[70px]  lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] lg:ms-2' src={HTMLLogo} alt='HTML logo' />
      <Image className='w-[40px] h-[40px] md:w-[70px]  md:h-[70px]  lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] lg:ms-2' src={JavaScriptLogo} alt='JavaScript logo' />
      <Image className='w-[40px] h-[40px] md:w-[70px]  md:h-[70px]  lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] lg:ms-2' src={JSLogo} alt='JS logo' />
      <Image className='w-[40px] h-[40px] md:w-[70px]  md:h-[70px]  lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]' src={ReactJsLogo} alt='React JS logo' />
    </div>
  )
}

export default Technology
