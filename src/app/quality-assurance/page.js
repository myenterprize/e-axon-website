"use client"
import React from 'react'
import Menu from '@/Components/menu/Menu'
import Benefit from '@/Components/services-component/benefit-section/Benefit'
import ServiceBanner from '@/Components/services-component/service-banner/ServiceBanner'
import ServiceTitle from '@/Components/services-component/service-title/ServiceTitle'
import Stage from '@/Components/services-component/test-stage/Stage'
import TStages from '@/Components/services-component/texting-stages/TStages'
import SBanner from "@/assets/images/service-banner.jpg"
import PlanningImg from '@/assets/svgs/planning-svg.svg'
import Performance from '@/assets/svgs/performance-testing.svg'
import Security from '@/assets/svgs/security-testing.svg'
import Reporting from '@/assets/svgs/reporting-feedback.svg'
import TestingProcess from '@/assets/svgs/testing-process.svg'
import TestImg from '@/assets/svgs/test-svg.svg'
import ManualEffort from '@/assets/svgs/manual-effort.svg'
import SoftwareQuality from '@/assets/svgs/software-quality.svg'
import ResultSection from '@/Components/services-component/result-section/ResultSection'
import CallToAction from '@/Components/call-to-action/CallToAction'
import FooterSection from '@/Components/footer/Footer'


const QualityAssurance = () => {

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

    },
    {
      No: "03",
      img: Performance,
      title: "Performance Testing",
      desc: "We validate stability and response times."

    },
    {
      No: "04",
      img: Security,
      title: "Security Testing",
      desc: "This step is to identify and mitigate vulnerabilities"

    },
    {
      No: "05",
      img: Reporting,
      title: "Reporting and Feedback",
      desc: "We aim to provide detailed reports and improvement suggestions."

    }
  ]
  const cardData = [
    {
      img: TestingProcess,
      desc: "Consistent and repeatable testing processes."
    },
    {
      img: ManualEffort,
      desc: "Reduced manual effort and lower costs."
    },
    {
      img: SoftwareQuality,
      desc: "Faster time to market with improved software quality."
    }
  ]

  return (
    <div className="w-full mx-auto">
      <Menu />
      <div className="w-full flex flex-col justify-center items-center">
        <ServiceTitle title={"Quality Assurance Testing & Automation"} subTitle={"Maximizing software reliability and operational efficiency through cutting-edge testing and automation techniques."} />
        <ServiceBanner banner={SBanner} title={"Advancing Quality"} description={"Quality Assurance Testing and Automation focuses on ensuring that software products meet the highest standards of quality through systematic testing processes and leveraging automation to increase efficiency and accuracy."}/>
        <div className='texting-section w-full h-auto md:h-[960px] bg-S1-50 pt-[15px] md:pt-[75px] px-0 md:px-[50px] lg:px-[150px] flex flex-col md:flex-row justify-between items-start mt-[65px] md:mt-[80px] lg:mt-0'>
          <TStages description={"Throughout the development lifecycle, our testing process encompasses several key stages, each meticulously designed to ensure the highest standards of quality and reliability. From comprehensive Test Planning to the meticulous execution of Automated Tests, rigorous Performance Testing, thorough Security Testing, and finally, detailed Reporting and Feedback, our approach is geared towards delivering exceptional software solutions that meet and exceed your expectations."}/>
          <Stage stageData={stageData}/>
        </div>
        <div className="benefit-section w-full pt-[112px] md:pt-[164px] flex justify-center items-center px-[20px]">
          <Benefit cardData={cardData}/>
        </div>
        <div className="results w-full flex justify-center md:justify-end items-center px-[20px]">
          <ResultSection resultTitle={"Our QA Testing & Automation can yield up to"} percentage1={"80"} prograsstext1={"reduction in bug detection time"} percentage2={"50"} prograsstext2={"increase in test coverage through automation"}/>
        </div>
        <CallToAction/>
      </div>
      <FooterSection/>
    </div>
  )
}

export default QualityAssurance;
