"use client"
import React from 'react'
import AboutTitle from '../about-title/AboutTitle'
import ImageSlider from '../slider-section/ImageSlider'

const  Story = () => {
  return (
    <div className="story w-full sm:max-w-[760px] sm:flex sm:flex-col sm:justify-center sm:items-center md:mb-[148px] mb-[88px]">
      <AboutTitle title={"Our Story"} desc={"We have been bettering our services and ourselves for "} span={"19 years"} classes='text-20/28 pt-[45.5px] font-bold sm:text-[28px] md:text-34/48 md:font-bold'/>
      <div className='pt-[33px] px-[13px] w-full sm:pt-[55px] md:pt-[91px] sm:mx-2  lg:max-w-[1200px] md:h-[506px] relative'> 
        <ImageSlider />
        </div>
     
    </div>
  )
}

export default Story
