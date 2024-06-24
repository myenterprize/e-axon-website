import React from 'react'

const Rating = ({ratingWidth, percentage, text, lineColor, ratingBorder, classes, ratingTitle}) => {
  return (
    <div className="item w-full flex flex-col md:flex-row justify-start items-center relative mb-0 md:mb-[120px] py-2 border-l-0 md:border-s-8 pl-[12px] md:pl-[18px] border-green-color right-0" style={{width: ratingWidth, borderColor: ratingBorder}}>
    <h1 className={`z-20 bg-white text-34/48 md:text-47/62 font-bold text-yellow-color ${classes}`} style={{color: lineColor}}>{percentage}%</h1>
    <p className={`p-0 md:px-[17px] z-20 bg-white text-12/15 md:text-18/25 font-semibold ${classes}`} style={{width: ratingTitle}}>{text}</p>
    <div className="horizontal-line w-full border-[2px] border-yellow-color float-end hidden md:block absolute z-10" style={{borderColor: lineColor}}>
    </div>
  </div>
  )
}

export default Rating
