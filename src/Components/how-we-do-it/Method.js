import React from 'react'
import OurProgress from './progress/OurProgress'
import ProgressCard from './progress/ProgressCard'

const Method = () => {
  return (
    <div className='w-full flex justify-center items-center mb-[0px] md:mb-[190px] px-6'>
      <div className='w-full max-w-[990px] flex flex-col justify-between text-center md:items-start'>
        <h3 className='text-20/28 md:text-24/34 font-bold text-black font-poppins mb-[35px] md:mb-[150px]'>How we do it</h3>
        <OurProgress/>
        <ProgressCard/>
      </div>
    </div>
  )
}

export default Method
