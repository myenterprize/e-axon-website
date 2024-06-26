import React from 'react'
import ProgressLine from '@/assets/svgs/progress-arrow.svg'
import BrainStorming from '@/assets/svgs/brain-storming.svg'
import Sitemape from '@/assets/svgs/sitemape.svg'
import Programmer from '@/assets/svgs/programmer.svg'
import TestingProcess from '@/assets/svgs/card-process.svg'
import ApiSvg from '@/assets/svgs/api-svg.svg'
import Maintaincelaptop from '@/assets/svgs/maintenance-laptop.svg'
import Image from 'next/image'

const ProgressCard = () => {

  const progressCard = [
    {
      step: "Step 1",
      icon: BrainStorming,
      title: "Discovery and Planning",
      arrow: ProgressLine
    },
    {
      step: "Step 2",
      icon: Sitemape,
      title: "Design and User Experience",
      arrow: ProgressLine
    },
    {
      step: "Step 3",
      icon: Programmer,
      title: "Development",
      arrow: ProgressLine
    },
    {
      step: "Step 4",
      icon: TestingProcess,
      title: "Maintenance and Updates",
      arrow: ProgressLine
    },
    {
      step: "Step 5",
      icon: ApiSvg,
      title: "Deployment",
      arrow: ProgressLine
    },
    {
      step: "Step 6",
      icon: Maintaincelaptop,
      title: "Testing",
      arrow: ProgressLine
    }
  ]
  return (
    <div className='w-full flex flex-col justify-center items-center gap-[24px] visible md:hidden'>
      {progressCard.map((card, index) =>(
        <div key={index} className='w-full text-center flex flex-col justify-center items-center gap-[10px]'>
        <p className='text-16/22 font-medium text-light-gray'>{card.step}</p>
        <Image className='w-[100px] h-[100px]' src={card.icon} alt='Icon'/>
        <h3 className='text-16/22 font-medium md:font-semibold text-black'>{card.title}</h3>
        {index === progressCard.length -1 ? null : <Image src={card.arrow} alt='arrow'/>}
      </div>
      ))}
    </div>
  )
}

export default ProgressCard
