"use client"
import React from 'react'
import Image from 'next/image'
import BridgingBg from '@/assets/svgs/bridging-bg.svg'
import Link from 'next/link'
import MarqueeEffect from '../marquee-section/MarqueeEffect'


const WorkStudy = ({isLeftBox, workImage, cardTitle, cardDesc, cardColor, cardPath, classes}) => {

  return (
    <div className='relative px-[20px] py-[30px] lg:py-[110px] lg:px-[180px] z-10 lg:overflow-hidden'>
      <Image className={`w-[240px] md:w-[500px] lg:w-[700px] xl:w-[850px] object-cover ${classes}`} src={workImage} />
      <Image className={`w-[200px] h-auto md:w-[300px] lg:w-[458px] lg:h-[257px] absolute bottom-16 md:bottom-32 lg:bottom-52 z-[-1] ${isLeftBox ? "left-0":"right-0"}`} src={BridgingBg}/>
      <div className={`work-content w-[190px] md:w-[270px] lg:w-[340px] absolute ${isLeftBox ? "left-0" : "right-0"} bottom-[-50px] md:bottom-[-30px] lg:bottom-14 bg-S1-400 px-[20px] pt-[20px] pb-[14px] rounded-[8px] shadow-xs10`} style={{backgroundColor: cardColor}}>
        <h6 className='text-12/15 md:text-18/25 text-white font-bold mb-1'>{cardTitle}</h6>
        <p className='text-9/12 md:text-12/15 text-white font-normal'>{cardDesc}</p>
        <Link href={cardPath} className='w-full text-10/13 md:text-14/18 text-white font-normal inline-block mt-[15px] md:mt-[32px] text-end pt-[8px] md:pt-[17px] border-t-[1px]'>
        Read full case study <span className='ms-3 font-bold'>→</span>
        </Link>
      </div>
      <div className='marquee-text absolute z-[-1] bottom-14 hidden lg:block'>
        <MarqueeEffect/>
      </div>
    </div>
  )
}

export default WorkStudy
