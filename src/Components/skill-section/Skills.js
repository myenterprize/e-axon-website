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
        <div className='flex justify-start items-center gap-9 text-14/18 font-semibold md:text-18/25 md:font-bold text-blue-color'>
          <h3>{elem.icon}</h3>
          <h3>{elem.title}</h3>
        </div>
      </li>
    )
  })

  return (
    <div className='w-full h-auto lg:max-w-[1062px] flex flex-col lg:flex-row justify-between items-center px-[15px] md:px-20 lg:px-[15px] lg:p-3 my-20'>
      <div className="chellange w-full lg:w-[40%]">
        <h3 className='text-16/22 md:text-24/34 font-semibold text-blue-color pb-[8px] lg:pb-8 border-b-2 border-blue-150'>Challenge</h3>
         <div className="list mt-8 text-12/15 md:text-18/25 font-normal">
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
      <Image className='hidden lg:block' src={VerticalLine} alt='Vertical line'/>
      <div className="skill w-full mt-10 md:mt-0 lg:w-[40%]">
        <h3 className='text-16/22 md:text-24/34 font-semibold text-blue-color pb-[8px] lg:pb-8 border-b-2 border-blue-150'>What we did</h3>
        <ul className='skill-list mt-8 md:grid md:grid-cols-2 md:items-center lg:block'>
          {serviceItem}
        </ul>
      </div>
    </div>
  )
}

export default Skills
