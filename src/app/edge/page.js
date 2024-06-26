"use client"
import Brand from '@/Components/brand/Brand'
import HeroSection from '@/Components/hero-section/HeroSection'
import Menu from '@/Components/menu/Menu'
import Edge from '@/assets/svgs/edge.svg'
import HeroEdge from '@/assets/images/hero-edge.jpg'
import React from 'react'
import TBanner from '@/Components/talent-banner/TBanner'
import TalentBanner from '@/assets/images/talent-image.jpg'
import Technology from '@/Components/technology-section/Technology'
import Skills from '@/Components/skill-section/Skills'
import Testimonials from '@/Components/reviews/Testimonials'
import CallToAction from '@/Components/call-to-action/CallToAction'
import FooterSection from '@/Components/footer/Footer'

const EdgePage = () => {
  return (
    <div className="w-full mx-auto">
      <Menu />
      <div className="w-full flex flex-col justify-start items-center mt-0 md:my-53">
        <Brand logo={Edge} title="Edge makes offshore hiring process efficient." />
        <HeroSection heroImage={HeroEdge} aboutText="Edge a leading California-based outsourcing firm, relies on E-Axon's innovative platform for efficient offshore hiring solutions. With our platform, clients seamlessly manage offshore teams and payroll, leveraging detailed employee profiles for optimal team matching. Powered by AWS infrastructure, our platform operates smoothly with Node.js and React technologies, ensuring reliability and performance" industry="Tech" companySize="100+" Year="20XX" />
       <div className="technology w-full bg-white lg:bg-S1-50 flex flex-col lg:flex-row justify-center items-center lg:overflow-hidden py-0 lg:py-24 px-[20px]">
       <h3 className='text-24/34 font-semibold mb-5 block lg:hidden'>Technologies Used</h3>
          <div className="image w-full lg:!w-[55%] xl:!w-[70%] mx-auto lg:ms-[100px] xl:ms-[220px] mb-5 lg:mb-0">
            <TBanner banner={TalentBanner}/>
          </div>
          <div className="technology-use w-full mx-auto lg:!w-[30%] xl:w-[30%] self-end lg:ms-[20px] inline-block lg:me-[20px]">
            <h3 className='text-24/34 font-semibold mb-5 hidden lg:block'>Technologies Used</h3>
            <Technology/>
          </div>
        </div>
        <Skills/>
        <div className="reviews w-full flex flex-col md:flex-row justify-center items-center md:mt-[130px] md:mb-[180px]">
          <Testimonials review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "} clientName={"Client Name"}/>
        </div>
        <CallToAction/>
       </div>
       <FooterSection/>
    </div>
  )
}

export default EdgePage;
