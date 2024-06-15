import React from 'react'
import Menu from '@/Components/menu/Menu'
import Benefit from '@/Components/services-component/benefit-section/Benefit'
import ServiceBanner from '@/Components/services-component/service-banner/ServiceBanner'
import ServiceTitle from '@/Components/services-component/service-title/ServiceTitle'
import Stage from '@/Components/services-component/test-stage/Stage'
import TStages from '@/Components/services-component/texting-stages/TStages'
import SBanner from "@/assets/images/software-banner.jpg"
import PlanningImg from '@/assets/svgs/requirment-svg.svg'
import TestingProcess from '@/assets/svgs/typing-svg.svg'
import TestImg from '@/assets/svgs/system-svg.svg'
import ManualEffort from '@/assets/svgs/mobile-payment.svg'
import SoftwareQuality from '@/assets/svgs/flash-sale.svg'
import ResultSection from '@/Components/services-component/result-section/ResultSection'
import CallToAction from '@/Components/call-to-action/CallToAction'
import FooterSection from '@/Components/footer/Footer'


const page = () => {
  const stageData = [
    {
      No: "01",
      img: PlanningImg,
      title: "Requirements Gathering",
      desc: "Collaborate with stakeholders to capture comprehensive functional and technical specifications."

    },
    {
      No: "02",
      img: TestImg,
      title: "System Design",
      desc: "Design a scalable and secure software architecture that supports web and desktop platforms."

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
    <>
      <Menu />
      <div className="w-full flex flex-col justify-center items-center">
        <ServiceTitle title={"Custom Software Development"} subTitle={"Tailoring software solutions to perfectly fit your business needs and drive operational success."} />
        <ServiceBanner banner={SBanner} title={"Tailored Software Solutions"} description={"Custom Software Development is focused on designing and creating bespoke software applications tailored specifically for your business needs. This service emphasizes developing robust, scalable web and desktop applications that not only meet the unique requirements of enterprise-level operations but also enhance user interaction and backend functionality. By integrating seamlessly with existing corporate environments, these custom solutions ensure that all aspects of business operations are optimized for efficiency, scalability, and user satisfaction."}/>
        <div className='texting-section w-full bg-P1-50 pt-[15px] md:pt-[55px] px-[20px] md:px-[50px] lg:px-[150px] flex flex-col md:flex-row justify-between items-start mt-[65px] md:mt-[80px] lg:mt-0'>
          <TStages description={"In our software development process, we start by collaborating closely with stakeholders to gather comprehensive functional and technical specifications. Our expert team then designs a scalable and secure software architecture that supports both web and desktop platforms. Using the latest programming languages and frameworks, we meticulously code the application to meet project requirements. Rigorous quality assurance testing ensures the software is robust, secure, and user-friendly. Upon completion, we systematically deploy the software across business-critical environments. Our commitment extends beyond deployment, as we provide ongoing maintenance and support, offering iterative improvements to adapt to business changes and technological advancements."}/>
          <Stage stageData={stageData} elementColor={"#414267"}/>
        </div>
        <div className="benefit-section w-full pt-16 flex justify-center items-center px-[20px]">
          <Benefit cardData={cardData}/>
        </div>
        <div className="results w-full flex justify-center md:justify-end items-center px-[20px]">
          <ResultSection resultTitle={"Use of  our Custom Software Development results in up to"} percentage1={"65"} prograsstext1={"of enterprises report enhanced customer satisfaction due to the deployment of tailored software solutions"} percentage2={"40"} prograsstext2={"average increase in operational efficiency"} rtColor={"#D3D8EA"} ratingColor={"#D3D8EA"} leftBorder={"#414267"}/>
        </div>
        <CallToAction/>
      </div>
      <FooterSection/>
    </>
  )
}

export default page
