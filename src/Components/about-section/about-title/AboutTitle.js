import React from 'react'

const AboutTitle = ({width, title, desc, fontSize,color, padding, span}) => {
  return (
    <div className='w-[750px] px-5 py-[63px] text-center' style={{width: width,padding: padding}}>
      <h1 className='text-47/62 font-extrabold text-[#0B3E66] mb-[19px]' style={{fontSize: fontSize, color: color}}>{title}</h1>
      <p className='text-18/25 text-[#0B3E66] font-medium'>{desc} <span className='text-[#3CBCC3]'>{span}</span>
</p>
    </div>
  )
}

export default AboutTitle
