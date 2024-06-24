"use client"
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import StoryImg from '@/assets/images/our-story.png';
import StoryImgHero from '@/assets/images/content-marketing-hero.png';
import StoryImgHeros from '@/assets/images/content-marketing-hero-1.png';
import NavButtons from './NavButtons';

const ImageSlider = () => {

  return (
    <div className="swiper-container relative">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // effect={'fade'}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {
          console.log(swiper)
        }}
      >
        <SwiperSlide className='relative'>
          <div className='absolute z-[-1] w-[215px] h-[117px] md:w-[499px] md:h-[171px] bg-P2-900 text-white rounded-[8px] py-[16px] pl-[11.5px] pe-[59.5px]  md:py-[41px] md:px-[36px]'>
            <p className='text-12/15 md:text-18/25 font-[300]'>Back in 2019 a few friends, filled with enthusiasm laid the foundations of a software development company. </p>
          </div>
          <Image className='float-end w-[220px] h-[220px] md:w-[500px] md:h-[500px] object-cover object-center' src={StoryImg} alt='slider image' />
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <div className='absolute z-[-1]  w-[215px] h-[117px] md:w-[499px] md:h-[171px] bg-P2-900 text-white rounded-[8px] py-[16px] pl-[11.5px] pe-[59.5px] md:py-[41px] md:px-[36px]'>
            <p className=' text-12/15 md:text-18/25 font-[300]'>Back in 2019 a few friends, filled with enthusiasm laid the foundations of a software development company. </p>
          </div>
          <Image className='float-end  w-[220px] h-[220px] md:w-[500px] md:h-[500px] object-cover object-center ' src={StoryImgHero} alt='slider image' />
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <div className='absolute z-[-1] w-[215px] h-[117px] md:w-[499px] md:h-[171px] bg-P2-900 text-white rounded-[8px] py-[16px] pl-[11.5px] pe-[59.5px]  md:py-[41px] md:px-[36px]'>
            <p className='text-12/15 md:text-18/25 font-[300]'>Back in 2019 a few friends, filled with enthusiasm laid the foundations of a software development company. </p>
          </div>
          <Image className='float-end  w-[220px] h-[220px] md:w-[500px] md:h-[500px] object-cover object-center' src={StoryImgHeros} alt='slider image' />
        </SwiperSlide>
        <NavButtons/>
      </Swiper>
    </div>
  )
}

export default ImageSlider;
