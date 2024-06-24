import React from 'react'
import Rating from '../rating-section/Rating'


const ResultSection = () => {
  return (
    <div className='w-[80%] pt-20 overflow-hidden'>
      <p className='text-16/22 font-normal text-[#ffffff] bg-[#075085] px-[12px] py-[8px] inline-block rounded-[3px] mb-[50px]'>Our QA Testing & Automation can yield up to</p>
      <div className="rating-list w-full py-10 flex flex-col items-end">
        <Rating percentage={"80"} text={"reduction in bug detection time"}/>
        <Rating ratingWidth={"80%"} percentage={"50"} text={"increase in test coverage through automation"}/>
      </div>
    </div>
  )
}

export default ResultSection
