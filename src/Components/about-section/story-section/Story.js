import React from 'react'
import AboutTitle from '../about-title/AboutTitle'
import AboutImage from '../about-image/AboutImage'
import StoryImg from '@/assets/svgs/our-story.svg'

const Story = () => {
  return (
    <div className="story w-[760px] flex flex-col justify-center items-center">
      <AboutTitle title={"Our Story"} desc={"We have been bettering our services and ourselves for "} span={"19 years"} fontSize={"34px"} padding={"100px 0px 0px 0px"}/>
      <AboutImage aboutHero={StoryImg}/>
    </div>
  )
}

export default Story
