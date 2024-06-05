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

const page = () => {
  return (
    <>
      <Menu />
      <div className="w-full min-h-[100vh] flex flex-col justify-start items-center my-53">
        <Brand logo={Edge} title="Edge makes offshore hiring process efficient." />
        <HeroSection heroImage={HeroEdge} aboutText="Edge a leading California-based outsourcing firm, relies on E-Axon's innovative platform for efficient offshore hiring solutions. With our platform, clients seamlessly manage offshore teams and payroll, leveraging detailed employee profiles for optimal team matching. Powered by AWS infrastructure, our platform operates smoothly with Node.js and React technologies, ensuring reliability and performance" industry="Tech" companySize="100+" Year="20XX" />
       <div className="technology w-full bg-[#F0FBFA] flex justify-center items-center overflow-hidden py-24">
          <div className="image w-[70%] ms-[220px]">
            <TBanner banner={TalentBanner}/>
          </div>
          <div className="technology-use w-[30%] self-end ms-[20px] inline-block">
            <h3 className='text-24/34 font-semibold mb-5'>Technologies Used</h3>
            <Technology/>
          </div>
        </div>
        <Skills/>
        <div className="reviews w-full h-[100vh] flex justify-center items-center">
          <Testimonials review={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} clientName={"Client Name"} backGround={"#BAE1FD"}/>
        </div>
       </div>
    </>
  )
}

export default page
