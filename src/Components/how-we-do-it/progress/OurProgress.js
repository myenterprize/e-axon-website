import React from 'react'
import ProgressLine from '@/assets/svgs/progress-line.svg'
import BrainStorming from '@/assets/svgs/brain-storming.svg'
import Sitemape from '@/assets/svgs/sitemape.svg'
import Programmer from '@/assets/svgs/programmer.svg'
import TestingProcess from '@/assets/svgs/card-process.svg'
import ApiSvg from '@/assets/svgs/api-svg.svg'
import Maintaincelaptop from '@/assets/svgs/maintenance-laptop.svg'
import Image from 'next/image'

const OurProgress = () => {

  const progressCard = [
    {
      row: [
        {
          step:"Step 1",
          icon:BrainStorming,
          title:"Discovery and Planning"
        },
        {
          step:"Step 2",
          icon:Sitemape,
          title:"Design and User Experience"
        },
        {
          step:"Step 3",
          icon:Programmer,
          title:"Development"
        }
      ]
    },
    {
      row: [
        {
          step:"Step 4",
          icon:TestingProcess,
          title:"Maintenance and Updates"
        },
        {
          step:"Step 5",
          icon:ApiSvg,
          title:"Deployment"
        },
        {
          step:"Step 6",
          icon:Maintaincelaptop,
          title:"Testing"
        }
      ]
    }
  ]

  return (
    <div className='w-[85%] relative self-end hidden md:block'>
     <Image src={ProgressLine} alt='Line' className='w-full h-full'/>
   <div className='w-full absolute top-[-75px] left-[-50px] flex flex-col justify-between items-center gap-[90px]'>
    {progressCard.map((card, index) =>(
      <div key={index} className='w-full flex justify-between items-center'>
        {card.row.map((item, i) =>(
          <div key={i} className='w-[150px] text-center flex flex-col justify-center items-center gap-[10px]'>
            <p className='text-16/22 font-medium text-light-gray'>{item.step}</p>
            <Image className='w-[85px] h-[85px]' src={item.icon} alt='Icon'/>
            <h3 className='text-16/22 font-medium md:font-semibold text-black'>{item.title}</h3>
          </div>
        ))}
     </div>
    ))}
   </div>
    </div>
  )
}

export default OurProgress
