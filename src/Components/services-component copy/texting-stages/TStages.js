import React from 'react'

const TStages = ({description, textColor}) => {
  return (
    <div className='w-[40%] h-[70%] py-4 px-2'>
      <h2 className='text-34/48 text-[#0B3E66] font-bold mb-16' style={{color: textColor}}>Our Testing Stages</h2>
      <p className='text-16/22 text-[#0B3E66] font-light'>{description}</p>
    </div>
  )
}

export default TStages
