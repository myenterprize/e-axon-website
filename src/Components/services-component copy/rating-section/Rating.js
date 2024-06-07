import React from 'react'

const Rating = ({ratingWidth, percentage, text, lineColor, ratingBorder, percentageColor}) => {
  return (
    <div className="item w-[100%] flex justify-start items-center relative mb-[120px] py-2 border-s-8 pl-[18px] border-[#3CBCC3] right-0" style={{width: ratingWidth, border: ratingBorder}}>
    <h1 className='z-20 bg-white text-47/62 font-bold text-[#EBA63F]' style={{color: percentageColor}}>{percentage}%</h1>
    <p className='px-[17px] z-20 bg-white text-18/25 font-semibold'>{text}</p>
    <div className="horizontal-line w-full border-[2px] border-[#EBA63F] float-end absolute z-10" style={{borderColor: lineColor}}>
    </div>
  </div>
  )
}

export default Rating
