"use client";
import React from "react";
import QualityIcon from '@/assets/svgs/what-we-do/quality.svg';
import ApplicationIcon from '@/assets/svgs/what-we-do/application.svg';
import MobileIcon from '@/assets/svgs/what-we-do/mobile-app.svg';
import ReviewIcon from '@/assets/svgs/what-we-do/review.svg';
import SoftwareIcon from '@/assets/svgs/what-we-do/software.svg';
import AiIcon from '@/assets/svgs/what-we-do/ai.svg';
import Image from "next/image";

export default function WhatWeDo() {
  const whatWeDoList = [
    {
      itemObject: [
        { 
          title: 'Quality Assurance Testing & Automation',
          desc: 'Maximizing software reliability and operational efficiency through cutting-edge testing and automation techniques.',
          icon: QualityIcon,
        },
        { 
          title: 'Application & Infrastructure Modernization',
          desc: 'Revitalizing legacy systems to meet contemporary business demands and technological advancements.',
          icon: ApplicationIcon,
        }
      ]
    },
    {
      itemObject: [
        { 
          title: 'Mobile Application Development',
          desc: 'Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence.',
          icon: MobileIcon,
        },
        { 
          title: 'Architectural Review',
          desc: 'Enhancing system architecture for optimal performance and scalability.',
          icon: ReviewIcon,
        }
      ]
    },
    {
      itemObject: [
        { 
          title: 'Custom Software Development',
          desc: 'Tailoring software solutions to perfectly fit your business needs and drive operational success.',
          icon: SoftwareIcon,
        },
        { 
          title: 'Artificial Intelligence',
          desc: 'Leveraging AI to drive innovation and enhance business intelligence across operations.',
          icon: AiIcon,
        }
      ]
    },
    
  ]
  return (
    <div className="flex mb-[161px]">
      <div className="w-full max-w-[1130px] mx-auto flex flex-col justify-between">
        <div className="text-34/48 text-[#000000] font-[800] flex justify-left p-[8px] mb-[42px]">What we do</div>

        {whatWeDoList.map((item, index) => (
          <div key={index} className={`bg-F9-10 rounded-[8px] p-[28px] flex md:flex-row flex-col justify-between ${index !== 0 && 'pt-[3px]'}`}>
            {item.itemObject.map((item, index) => (
              <div key={index} className="w-full md:w-[471px] p-[14px]">
                <div className="pb-[15px] border-b-2 border-[#3CBCC3] border-opacity-[87%] mb-[15px]"><Image src={item.icon} alt="Quality Assurance Testing & Automation" /></div>
                <div className="text-24/34 text-black font-[700] p-[8px] mb-[15px]">{item.title}</div>
                <div className="text-16/22 text-black p-[8px]">{item.desc}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
