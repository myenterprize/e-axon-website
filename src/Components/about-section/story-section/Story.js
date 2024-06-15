import React from 'react'
import AboutTitle from '../about-title/AboutTitle'
import AboutImage from '../about-image/AboutImage'
import StoryImg from '@/assets/svgs/our-story.svg'

const  Story = () => {
  return (
    <div className="story sm:max-w-[760px] sm:flex sm:flex-col sm:justify-center sm:items-center">
      <AboutTitle title={"Our Story"} desc={"We have been bettering our services and ourselves for "} span={"19 years"} classes='text-20/28 pt-[45.5px] font-bold sm:text-[28px] md:text-34/48 md:font-bold'/>
      <AboutImage aboutHero={StoryImg}/>
    </div>
  )
}

export default Story
