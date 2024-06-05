import React from 'react'


const Testimonials = ({review, clientName, backGround, textColor}) => {

  return (
    <div className={`w-full max-w-[1080px] h-[394px] rounded-[8px] flex flex-col justify-center items-center gap-14 px-24`} style={{backgroundColor: backGround}}>
      <h3 className='text-center text-24/34 text-[#414267] font-medium'>Hear It From Our Client</h3>
      <div className="review">
      <p className='text-18/25 text-[#FFFFFF] font-semibold before:content-["‟"] before:absolute before:left-[-60px] before:text-[128px] after:content-["‟"] after:rotate-180 after:text-[128px] after:absolute after:right-[190px] after:bottom-[15px] relative' style={{color: textColor}}>
       {review}</p>
      </div>
      <h6 className='text-16/22 text-[#414267] font-medium self-end'>{clientName}</h6>
    </div>
  )
}

export default Testimonials
