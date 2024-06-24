import React from 'react'
import Rating from '../rating-section/Rating'
import MobileLine from "@/assets/svgs/mobile-line.svg"
import Image from 'next/image'


const ResultSection = ({resultTitle, rtColor, percentage1, prograsstext1, percentage2, prograsstext2,ratingColor, leftBorder, paraWidth}) => {



  return (
    <div className='w-full md:w-[80%] pt-20 flex flex-col justify-center items-center md:items-start'>
      <p className='text-9/12 md:text-16/22 font-normal text-white bg-P2-900 px-[12px] py-[8px] inline-block rounded-[3px] mb-0 md:mb-[50px]' style={{backgroundColor: rtColor}}>{resultTitle}</p>
      <div className="rating-list w-full py-10 flex flex-row md:flex-col items-start md:items-end">
        <Rating percentage={percentage1} text={prograsstext1} classes="text-start pe-[30px]" lineColor={ratingColor} ratingBorder={leftBorder} ratingTitle={paraWidth}/>
        <Image className='me-5 block md:hidden' src={MobileLine} alt='mobile line' />
        <Rating ratingWidth={"80%"} percentage={percentage2} text={prograsstext2} classes="text-start" lineColor={ratingColor} ratingBorder={leftBorder}/>
      </div>
    </div>
  )
}

export default ResultSection
