import React from 'react'

const AboutCard = ({title, desc, bgColor, padding, userBg}) => {

  return (
    <div className='mb-[16px] h-[396px] w-full md:max-w-[440px] md:h-[440px] sm:rounded-[8px] bg-S1-500 flex flex-col justify-between items-center relative py-[48px] px-[33px] text-center z-20' style={{backgroundColor: bgColor}}>
      <div className="user-top w-[150px] h-[150px] absolute bottom-[150px] bg-P2-900 rounded-[50%]" style={{backgroundColor: userBg}}></div>
      <div className="user-top w-[108px] h-[108px] absolute bottom-[60px] bg-P2-900 rounded-[50%]" style={{backgroundColor: userBg}}></div>
      <h3 className='text-18/25 sm:text-[20px] md:text-24/34 font-bold text-white'>{title}</h3>
      <p className='text-14/18 md:text-16/22 font-normal text-white z-20' style={{paddingBottom: padding}}>{desc}</p>
    </div>
  )
}

export default AboutCard
