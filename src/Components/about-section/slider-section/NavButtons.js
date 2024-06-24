import React from 'react';
import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import Arrow from '@/assets/svgs/forward-arrow.svg';

const NavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns flex justify-center items-center gap-[190px]">
      <Image className='cursor-pointer rotate-180 w-[32px] h-[32px]' src={Arrow} onClick={() => swiper.slidePrev()} alt=''/>
      <div className='text-28/39 font-500 text-black absolute w-full text-center  bottom-0 left-0 z-[-1] '><p className='border-b-2 inline-block border-[#3CBCC3]'>2019</p></div>
      <Image className='cursor-pointer w-[32px] h-[32px]' src={Arrow} onClick={() => swiper.slideNext()} alt=''/>
    </div>
  )
}

export default NavButtons
