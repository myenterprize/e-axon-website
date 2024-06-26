import React from 'react'


const Testimonials = ({review, clientName, backGround, textColor}) => {

  return (
    <div className='w-full max-w-[1080px] rounded-0 md:rounded-[8px] flex flex-col justify-center items-center gap-[22px] md:gap-14 px-[52px] md:px-24 bg-P2-200 py-[20px]' style={{backgroundColor: backGround}}>
      <h3 className='text-center text-12/15 md:text-24/34 text-P2-800 font-medium'>Hear It From Our Client</h3>
      <div className="review relative">
      <p className='text-12/15 md:text-18/25 text-white font-semibold text-justify' style={{color: textColor}}>
      <span className='absolute left-[-20px] md:left-[-55px] md:-top-[48px] -top-[11px] text-[30px] md:text-[113px] scale-y-[-1]'>‟</span>
       {review}
       <span className='absolute  md:-bottom-[50px] -bottom-[12px] ms-3 rotate-0 text-[30px] md:text-[113px] scale-x-[-1]'>‟</span>
       </p>
      </div>
      <h6 className='text-9/12 md:text-16/22 text-P2-800 font-medium self-end'>{clientName}</h6>
    </div>
  )
}

export default Testimonials
