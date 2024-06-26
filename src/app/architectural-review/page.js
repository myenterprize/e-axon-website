"use client"
import React, { useEffect, useState } from 'react'
import Menu from '@/Components/menu/Menu'
import Benefit from '@/Components/services-component/benefit-section/Benefit'
import ServiceBanner from '@/Components/services-component/service-banner/ServiceBanner'
import ServiceTitle from '@/Components/services-component/service-title/ServiceTitle'
import Stage from '@/Components/services-component/test-stage/Stage'
import TStages from '@/Components/services-component/texting-stages/TStages'
import SBanner from "@/assets/images/architectural-banner.jpg"
import MBanner from "@/assets/images/ar.jpg"
import PlanningImg from '@/assets/svgs/assesment-svg.svg'
import Guidance from '@/assets/svgs/guidance.svg'
import Monitering from '@/assets/svgs/monitering.svg'
import Ongoing from '@/assets/svgs/ongoing.svg' 
import TestingProcess from '@/assets/svgs/coding-medal.svg'
import TestImg from '@/assets/svgs/identification-svg.svg'
import ManualEffort from '@/assets/svgs/data-box.svg'
import SoftwareQuality from '@/assets/svgs/filter-svg.svg'
import ResultSection from '@/Components/services-component/result-section/ResultSection'
import CallToAction from '@/Components/call-to-action/CallToAction'
import FooterSection from '@/Components/footer/Footer'


const ArchitecturalReview = () => {
  const [image, setImage] = useState(SBanner);


  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 1024) {
        setImage(MBanner);
     
      } else {
        setImage(SBanner);
      
      }
    };

    updateImage(); // Set the initial background image
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);

  const stageData = [
    {
      No: "01",
      img: PlanningImg,
      title: "Assessment",
      desc: "Evaluate the current setup."

    },
    {
      No: "02",
      img: TestImg,
      title: "Identification of Improvements",
      desc: "Recommend enhancements and new technologies."

    },
    {
      No: "03",
      img: Guidance,
      title: "Implementation Guidance",
      desc: "Assist in implementing architectural changes."

    },
    {
      No: "04",
      img: Monitering,
      title: "Performance Monitoring",
      desc: "Continuously monitor system performance."

    },
    {
      No: "05",
      img: Ongoing,
      title: "Ongoing Optimization",
      desc: "Regular updates and optimization."

    }
  ]
  const cardData = [
    {
      img: TestingProcess,
      desc: "Improved system reliability and efficiency."
    },
    {
      img: ManualEffort,
      desc: "Better management of data and resources."
    },
    {
      img: SoftwareQuality,
      desc: "Future-proof business operations against technological advances."
    }
  ]

  return (
    <div className="w-full mx-auto">
      <Menu />
      <div className="w-full flex flex-col justify-center items-center">
        <ServiceTitle title={"Architectural Review"} subTitle={"Enhancing system architecture for optimal performance and scalability."} />
        <ServiceBanner banner={image} title={"Future-Proofing Software Architecture"} description={"Architectural Review ensures that the software architecture meets current and future technological and business needs, promoting efficient performance and scalability."}/>
        <div className='texting-section w-full h-auto md:h-[960px] bg-P1-200 pt-[15px] md:pt-[55px] px-0 md:px-[50px] lg:px-[150px] flex flex-col md:flex-row justify-between items-start mt-[65px] md:mt-[80px] lg:mt-0'>
          <TStages description={"In our architectural assessment process, we thoroughly evaluate your current setup, identifying areas for improvement and opportunities for innovation. Our expert team provides recommendations for enhancements and suggests new technologies to align your architecture with business goals. We offer guidance throughout the implementation of architectural changes, ensuring a seamless transition. Continuous performance monitoring allows us to gauge system effectiveness, with ongoing updates and optimization ensuring sustained operational excellence."}/>
          <Stage stageData={stageData} elementColor={"#414267"}/>
        </div>
        <div className="benefit-section w-full pt-[112px] md:pt-[164px] flex justify-center items-center px-[20px]">
          <Benefit cardData={cardData}/>
        </div>
        <div className="results w-full flex justify-center md:justify-end items-center px-[20px]">
          <ResultSection resultTitle={"Our Architecture Review services results in up to"} percentage1={"50"} prograsstext1={"increase in system responsiveness after architectural optimizations"} percentage2={"40"} prograsstext2={"reduction in maintenance costs due to architectural Improvements"} rtColor={"#414267"} ratingColor={"#414267"} leftBorder={"#414267"}/>
        </div>
        <CallToAction/>
      </div>
      <FooterSection/>
    </div>
  )
}

export default ArchitecturalReview;
