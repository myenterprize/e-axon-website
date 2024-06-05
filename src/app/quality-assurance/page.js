import Menu from '@/Components/menu/Menu'
import Benefit from '@/Components/services-component/benefit-section/Benefit'
import ServiceBanner from '@/Components/services-component/service-banner/ServiceBanner'
import ServiceTitle from '@/Components/services-component/service-title/ServiceTitle'
import Stage from '@/Components/services-component/test-stage/Stage'
import TStages from '@/Components/services-component/texting-stages/TStages'
import SBanner from "@/assets/images/service-banner.jpg"
import PlanningImg from '@/assets/svgs/planning-svg.svg'
import TestImg from '@/assets/svgs/test-svg.svg'
import MarketingImg from '@/assets/svgs/marketing-svg.svg'
import EyeImg from '@/assets/svgs/Eye-svg.svg'
import TargetImg from '@/assets/svgs/target-svg.svg'
import React from 'react'
import ResultSection from '@/Components/services-component/result-section/ResultSection'


const page = () => {
  const stageData = [
    {
      No: "01",
      img: PlanningImg,
      title: "Testing Planning",
      desc: "We develop comprehensive testing strategies."

    },
    {
      No: "02",
      img: TestImg,
      title: "Automated Test Development",
      desc: "We then design and execute automated tests."

    }
  ]
  const cardData = [
    {
      img: MarketingImg,
      desc: "Higher engagement and customer satisfaction."
    },
    {
      img: EyeImg,
      desc: "Increased brand visibility and accessibility."
    },
    {
      img: TargetImg,
      desc: "Direct marketing channel to users."
    }
  ]

  return (
    <>
      <Menu />
      <div className="w-[full] flex flex-col justify-center items-center">
        <ServiceTitle title={"Quality Assurance Testing & Automation"} subTitle={"Maximizing software reliability and operational efficiency through cutting-edge testing and automation techniques."} />
        <ServiceBanner banner={SBanner} title={"Advancing Quality"} description={"Quality Assurance Testing and Automation focuses on ensuring that software products meet the highest standards of quality through systematic testing processes and leveraging automation to increase efficiency and accuracy."}/>
        <div className='texting-section w-full min-h-[100vh] bg-[#F0FBFA] pt-[55px] px-[150px] flex justify-between items-start'>
          <TStages description={"Throughout the development lifecycle, our testing process encompasses several key stages, each meticulously designed to ensure the highest standards of quality and reliability. From comprehensive Test Planning to the meticulous execution of Automated Tests, rigorous Performance Testing, thorough Security Testing, and finally, detailed Reporting and Feedback, our approach is geared towards delivering exceptional software solutions that meet and exceed your expectations."}/>
          <Stage stageData={stageData}/>
        </div>
        <div className="benefit-section w-full pt-16 flex justify-center items-center">
          <Benefit cardData={cardData}/>
        </div>
        <div className="results w-full">
          <ResultSection/>
        </div>
      </div>
    </>
  )
}

export default page
