import React from 'react'

const TStages = ({description, textColor}) => {
  return (
    <div className='w-full h-auto md:w-[50%] lg:w-[40%] md:h-[70%] py-4 px-[40px] md:px-2'>
      <h2 className='text-20/28 md:text-34/48 text-blue-color font-bold mb-[24px] md:mb-16 text-center md:text-start' style={{color: textColor}}>Our Testing Stages</h2>
      <p className='text-16/22 text-blue-color font-light text-justify md:text-start'>{description}</p>
    </div>
  )
}

export default TStages
