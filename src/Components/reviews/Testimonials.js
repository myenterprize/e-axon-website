import React from 'react'


const Testimonials = ({review, clientName, backGround, textColor}) => {

  return (
    <div className='w-full max-w-[1080px] rounded-0 md:rounded-[8px] flex flex-col justify-center items-center gap-[22px] md:gap-14 px-[52px] md:px-24 bg-P2-200 py-[20px]' style={{backgroundColor: backGround}}>
      <h3 className='text-center text-12/15 md:text-24/34 text-P2-800 font-medium'>Hear It From Our Client</h3>
      <div className="review relative">
      <p className='text-12/15 md:text-18/25 text-white font-semibold ' style={{color: textColor}}>
      <span className='absolute left-[-20px] md:left-[-60px] text-[25px] md:text-[128px]'>‟</span>
       {review}
       <span className='absolute  lg:bottom-[15px] rotate-180 text-[25px] md:text-[128px]'>‟</span>
       </p>
      </div>
      <h6 className='text-9/12 md:text-16/22 text-P2-800 font-medium self-end'>{clientName}</h6>
    </div>
  )
}

export default Testimonials
