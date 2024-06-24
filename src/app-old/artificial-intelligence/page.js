import React from 'react'
import Menu from '@/Components/menu/Menu'
import Benefit from '@/Components/services-component/benefit-section/Benefit'
import ServiceBanner from '@/Components/services-component/service-banner/ServiceBanner'
import ServiceTitle from '@/Components/services-component/service-title/ServiceTitle'
import Stage from '@/Components/services-component/test-stage/Stage'
import TStages from '@/Components/services-component/texting-stages/TStages'
import SBanner from "@/assets/images/artificial-banner.jpg"
import PlanningImg from '@/assets/svgs/ai-development.svg'
import TestingProcess from '@/assets/svgs/distribution-svg.svg'
import TestImg from '@/assets/svgs/saas-svg.svg'
import ManualEffort from '@/assets/svgs/growth-svg.svg'
import SoftwareQuality from '@/assets/svgs/inovation-svg.svg'
import ResultSection from '@/Components/services-component/result-section/ResultSection'
import CallToAction from '@/Components/call-to-action/CallToAction'
import FooterSection from '@/Components/footer/Footer'


const page = () => {
  const stageData = [
    {
      No: "01",
      img: PlanningImg,
      title: "AI Strategy Development",
      desc: "Define how AI can be integrated into business models."

    },
    {
      No: "02",
      img: TestImg,
      title: "Machine Learning Implementation",
      desc: "Develop and train machine learning models."

    }
  ]
  const cardData = [
    {
      img: TestingProcess,
      desc: "Enhanced operational efficiency through automation."
    },
    {
      img: ManualEffort,
      desc: "Improved customer insights and personalized experiences."
    },
    {
      img: SoftwareQuality,
      desc: "Competitive advantage through innovative technology use."
    }
  ]

  return (
    <>
      <Menu />
      <div className="w-full flex flex-col justify-center items-center">
        <ServiceTitle title={"Artificial Intelligence"} subTitle={"Leveraging AI to drive innovation and  enhance business intelligence across operations."} />
        <ServiceBanner banner={SBanner} title={"AI-Powered Innovation"} description={"Artificial Intelligence services focus on integrating AI technologies to automate processes, enhance decision-making, and create new opportunities for innovation and efficiency in businesses."}/>
        <div className='texting-section w-full bg-S1-50 pt-[15px] md:pt-[55px] px-[20px] md:px-[50px] lg:px-[150px] flex flex-col md:flex-row justify-between items-start mt-[65px] md:mt-[80px] lg:mt-0'>
          <TStages description={"In our AI journey, we begin by crafting a tailored strategy to seamlessly integrate AI into your business model. This involves developing and training machine learning models to optimize processes and drive innovation. Natural Language Processing is then employed to enhance user interactions, while AI-powered automation streamlines operations for increased efficiency. Continuous performance monitoring ensures the effectiveness of AI implementations, with regular refinements based on performance data ensuring ongoing improvement and alignment with business objectives."} textColor={"#3CBCC3"}/>
          <Stage stageData={stageData}/>
        </div>
        <div className="benefit-section w-full pt-16 flex justify-center items-center px-[20px]">
          <Benefit cardData={cardData}/>
        </div>
        <div className="results w-full flex justify-center md:justify-end items-center px-[20px]">
          <ResultSection resultTitle={"Use of  our AI services results in upto"} percentage1={"40"} prograsstext1={"increase in productivity for early adopters due to AI"} percentage2={"35"} prograsstext2={"better customer engagement for businesses using AI report"} rtColor={"#3CBCC3"} ratingColor={"#3CBCC3"} leftBorder={"#075085"}/>
        </div>
        <CallToAction/>
      </div>
      <FooterSection/>
    </>
  )
}

export default page
