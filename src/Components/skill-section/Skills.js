import React from 'react'
import Image from 'next/image'
import VerticalLine from '@/assets/svgs/Line.svg'

const Skills = () => {
  return (
    <div className='w-[1062px] h-[480px] flex justify-between items-center p-3 my-20'>
      <div className="chellange w-[40%]">
        <h3 className='text-24/34 font-semibold text-[#0B3E66] pb-8 border-b-2 border-[#0B3E66]'>Challenge</h3>
         <div className="list mt-8 text-18/25 font-normal">
         <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>• sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>• Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
         </div>
      </div>
      <Image src={VerticalLine}/>
      <div className="skill w-[40%]">
        <h3 className='text-24/34 font-semibold text-[#0B3E66] pb-8 border-b-2 border-[#0B3E66]'>What we did</h3>
        <div className='skill-list'></div>
      </div>
    </div>
  )
}

export default Skills
