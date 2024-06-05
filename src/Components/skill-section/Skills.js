"use client"
import React from 'react'
import Image from 'next/image'
import VerticalLine from '@/assets/svgs/Line.svg'
import MeterIcon from '../svg-icons/MeterIcon'
import CodeIcon from '../svg-icons/CodeIcon'
import ComputerIcon from '../svg-icons/ComputerIcon'
import CodeLayerIcon from '../svg-icons/CodeLayerIcon'
import CloudIcon from '../svg-icons/CloudIcon'

const Skills = () => {

  const services = [
    {
      icon: <MeterIcon/>,
      title: "Quality Assurance"
    },
    {
      icon: <CodeIcon/>,
      title: "Project Management"
    },
    {
      icon: <ComputerIcon/>,
      title: "Front-end Development"
    },
    {
      icon: <CodeLayerIcon/>,
      title: "Back-end Development"
    },
    {
      icon: <CloudIcon/>,
      title: "Cloud Services"
    },
  ]

 const serviceItem = services.map((elem, i) => {
    return (
      <li key={i} className='mb-[19px]'>
        <div className='flex justify-start items-center gap-9 text-18/25 font-bold text-[#075085]'>
          <h3>{elem.icon}</h3>
          <h3>{elem.title}</h3>
        </div>
      </li>
    )
  })

  return (
    <div className='w-[1062px] h-[480px] flex justify-between items-center p-3 my-20'>
      <div className="chellange w-[40%]">
        <h3 className='text-24/34 font-semibold text-[#0B3E66] pb-8 border-b-2 border-[#0B3E66]'>Challenge</h3>
         <div className="list mt-8 text-18/25 font-normal">
         <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
         <br/>
          <p>• sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br/>
          <p>• Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <br/>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <br/>
         </div>
      </div>
      <Image src={VerticalLine}/>
      <div className="skill w-[40%]">
        <h3 className='text-24/34 font-semibold text-[#0B3E66] pb-8 border-b-2 border-[#0B3E66]'>What we did</h3>
        <ul className='skill-list mt-8'>
          {serviceItem}
        </ul>
      </div>
    </div>
  )
}

export default Skills
