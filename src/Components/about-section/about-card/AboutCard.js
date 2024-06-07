import React from 'react'

const AboutCard = ({title, desc, bgColor, padding, userBg}) => {

  return (
    <div className='w-[440px] h-[440px] rounded-[8px] bg-[#3CBCC3BD] flex flex-col justify-between items-center relative py-[48px] px-[33px] text-center z-20' style={{backgroundColor: bgColor}}>
      <div className="user-top w-[150px] h-[150px] absolute bottom-[150px] bg-[#0B3E66] rounded-[50%]" style={{backgroundColor: userBg}}></div>
      <div className="user-top w-[108px] h-[108px] absolute bottom-[60px] bg-[#0B3E66] rounded-[50%]" style={{backgroundColor: userBg}}></div>
      <h3 className='text-24/34 font-bold text-[#ffffff]'>{title}</h3>
      <p className='text-16/22 font-normal text-[#ffffff] z-20' style={{paddingBottom: padding}}>{desc}</p>
    </div>
  )
}

export default AboutCard
