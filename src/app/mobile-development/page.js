"use client"
import React, { useEffect, useState } from 'react'
import Menu from '@/Components/menu/Menu'
import Benefit from '@/Components/services-component/benefit-section/Benefit'
import ServiceBanner from '@/Components/services-component/service-banner/ServiceBanner'
import ServiceTitle from '@/Components/services-component/service-title/ServiceTitle'
import Stage from '@/Components/services-component/test-stage/Stage'
import TStages from '@/Components/services-component/texting-stages/TStages'
import SBanner from "@/assets/images/mobile-banner.jpg"
import MBanner from "@/assets/images/mobile-app.jpg"
import PlanningImg from '@/assets/svgs/discover-planning.svg'
import Development from '@/assets/svgs/m-development.svg'
import MTesting from '@/assets/svgs/m-testing.svg'
import CodeDevelopment from '@/assets/svgs/code-development.svg'
import Updates from '@/assets/svgs/updates-maintaince.svg'
import TestingProcess from '@/assets/svgs/marketing-svg.svg'
import TestImg from '@/assets/svgs/design-experience.svg'
import ManualEffort from '@/assets/svgs/Eye-svg.svg'
import SoftwareQuality from '@/assets/svgs/target-svg.svg'
import ResultSection from '@/Components/services-component/result-section/ResultSection'
import CallToAction from '@/Components/call-to-action/CallToAction'
import FooterSection from '@/Components/footer/Footer'


const page = () => {
  
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
      title: "Discovery & Planning",
      desc: "To understand user needs and market demands."

    },
    {
      No: "02",
      img: TestImg,
      title: "Design and User Experience",
      desc: "To create engaging and intuitive interfaces."

    },
    {
      No: "03",
      img: Development,
      title: "Development",
      desc: "Code applications for multiple platforms."

    },
    {
      No: "04",
      img: MTesting,
      title: "Testing",
      desc: "Ensure functionality and performance on all devices."

    },
    {
      No: "05",
      img: CodeDevelopment,
      title: "Deployment",
      desc: "Launch apps in relevant app stores."

    },
    {
      No: "06",
      img: Updates,
      title: "Maintenance and Updates",
      desc: "Continuously update and improve the app."

    },
  ]
  const cardData = [
    {
      img: TestingProcess,
      desc: "Higher engagement and customer satisfaction."
    },
    {
      img: ManualEffort,
      desc: "Increased brand visibility and accessibility."
    },
    {
      img: SoftwareQuality,
      desc: "Direct marketing channel to users."
    }
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Menu />
      <div className="w-full flex flex-col justify-center items-center">
        <ServiceTitle title={"Mobile Application Development"} subTitle={"Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence."} />
        <ServiceBanner banner={image} title={"Seamless Experiences"} description={"Mobile Application Development involves crafting intuitive and feature-rich mobile apps designed to enhance user engagement and provide seamless functionality across all mobile platforms."}/>
        <div className='texting-section w-full h-auto md:h-[960px] bg-S1-50 pt-[15px] md:pt-[55px] px-0 md:px-[50px] lg:px-[150px] flex flex-col md:flex-row justify-between items-start mt-[65px] md:mt-[80px] lg:mt-0'>
          <TStages description={"In our app development process, we begin with thorough discovery and planning phases to understand user needs and market demands. Our design and user experience experts then craft engaging and intuitive interfaces to enhance user interaction. Through development, we code applications for multiple platforms, ensuring broad accessibility. Rigorous testing ensures functionality and performance across all devices before deployment, launching apps in relevant app stores. Our commitment extends post-deployment, as we provide ongoing maintenance and updates to continuously improve the app's performance and user experience."}/>
          <Stage stageData={stageData} elementColor={"#075085"}/>
        </div>
        <div className="benefit-section w-full pt-[112px] md:pt-[164px] flex justify-center items-center px-[20px]">
          <Benefit cardData={cardData}/>
        </div>
        <div className="results w-full flex justify-center md:justify-end items-center px-[20px]">
          <ResultSection resultTitle={"Our Mobile Application Development services results in"} percentage1={"70"} prograsstext1={"attraction of mobile users who prefer apps over websites for business"} percentage2={"50"} prograsstext2={"Increase in customer retention"} rtColor={"#075085"} ratingColor={"#075085"} leftBorder={"#075085"}/>
        </div>
        <CallToAction/>
      </div>
      <FooterSection/>
    </div>
  )
}

export default page
