import React from 'react'
import Menu from '@/Components/menu/Menu'
import Benefit from '@/Components/services-component/benefit-section/Benefit'
import ServiceBanner from '@/Components/services-component/service-banner/ServiceBanner'
import ServiceTitle from '@/Components/services-component/service-title/ServiceTitle'
import Stage from '@/Components/services-component/test-stage/Stage'
import TStages from '@/Components/services-component/texting-stages/TStages'
import SBanner from "@/assets/images/application-banner.jpg"
import PlanningImg from '@/assets/svgs/initial-svg.svg'
import Implementation from '@/assets/svgs/implementation.svg'
import Validation from '@/assets/svgs/validation.svg'
import Support from '@/assets/svgs/support.svg'
import TestingProcess from '@/assets/svgs/enhance-svg.svg'
import Integeration from '@/assets/svgs/integeration.svg'
import TestImg from '@/assets/svgs/strategy-svg.svg'
import ManualEffort from '@/assets/svgs/mobile-stock.svg'
import SoftwareQuality from '@/assets/svgs/compititive-svg.svg'
import ResultSection from '@/Components/services-component/result-section/ResultSection'
import CallToAction from '@/Components/call-to-action/CallToAction'
import FooterSection from '@/Components/footer/Footer'


const page = () => {
  const stageData = [
    {
      No: "01",
      img: PlanningImg,
      title: "Initial Assessment",
      desc: "Analyze existing applications and infrastructure."

    },
    {
      No: "02",
      img: TestImg,
      title: "Strategic Planning",
      desc: "Plan the modernization process."

    },
    {
      No: "03",
      img: Implementation,
      title: "Implementation",
      desc: "Upgrade systems and integrate new technologies."

    },
    {
      No: "04",
      img: Validation,
      title: "Testing and Validation",
      desc: "Ensure full operational capabilities."

    },
    {
      No: "05",
      img: Support,
      title: "Continuous Support",
      desc: "Provide ongoing support and future upgrades."

    }
  ]
  const cardData = [
    {
      img: TestingProcess,
      title: "Enhanced Efficiency",  
      desc: "Custom software specifically enhances business processes, resulting in significant operational improvements."
    },
    {
      img: ManualEffort,
      title:"Scalability",
      desc: "Designed to accommodate growth, these solutions can evolve with your business, supporting new processes and additional users without performance degradation."
    },
    {
      img: SoftwareQuality,
      title:"Competitive Advantage",
      desc: "Custom applications provide unique functionalities that set businesses apart from competitors."
    },
    {
      img: Integeration,
      title:"Integration Capabilities",
      desc: "Seamless integration with existing IT infrastructure minimizes disruptions and maximizes efficiency across departments."
    }
  ]

  return (
    <>
      <Menu />
      <div className="w-full flex flex-col justify-center items-center">
        <ServiceTitle title={"Application And Infrastructure Modernization"} subTitle={"Revitalizing legacy systems to meet contemporary business demands and technological advancements."} />
        <ServiceBanner banner={SBanner} title={"Revitalizing IT Infrastructure"} description={"Application and Infrastructure Modernization involves updating and enhancing older systems and technologies to improve performance, reduce costs, and ensure compatibility with new applications and data frameworks."}/>
        <div className='texting-section w-full bg-FAE1-200 pt-[15px] md:pt-[55px] px-0 md:px-[50px] lg:px-[150px] flex flex-col md:flex-row justify-between items-start mt-[65px] md:mt-[80px] lg:mt-0'>
          <TStages description={"Our initial assessment begins with a comprehensive analysis of your existing applications and infrastructure, identifying areas for improvement. We then embark on strategic planning to map out the modernization process, ensuring alignment with your business objectives. Through meticulous implementation, we upgrade systems and seamlessly integrate new technologies, followed by rigorous testing and validation to ensure full operational capabilities. Our commitment extends beyond implementation, as we provide continuous support and future upgrades to optimize performance and maintain efficiency."}/>
          <Stage stageData={stageData} elementColor={"#0B3E66"}/>
        </div>
        <div className="benefit-section w-full pt-16 flex justify-center items-center px-[20px]">
          <Benefit cardData={cardData} cardWidth={"350px"}/>
        </div>
        <div className="results w-full flex justify-center md:justify-end items-center px-[20px]">
          <ResultSection resultTitle={"Our Application & Infrastructure Moderanozation services results in up to"} percentage1={"50"} prograsstext1={"increase in operational efficiency "} percentage2={"30"} prograsstext2={"Reduction in IT costs"} rtColor={"#EBA63F"} ratingColor={"#EBA63F"} leftBorder={"#EBA63F"}/>
        </div>
        <CallToAction/>
      </div>
      <FooterSection/>
    </>
  )
}

export default page
