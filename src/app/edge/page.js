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

const page = () => {
  return (
    <>
      <Menu />
      <div className="w-full min-h-[100vh] flex flex-col justify-start items-center my-53">
        <Brand logo={Edge} title="Edge makes offshore hiring process efficient." />
        <HeroSection heroImage={HeroEdge} aboutText="Edge a leading California-based outsourcing firm, relies on E-Axon's innovative platform for efficient offshore hiring solutions. With our platform, clients seamlessly manage offshore teams and payroll, leveraging detailed employee profiles for optimal team matching. Powered by AWS infrastructure, our platform operates smoothly with Node.js and React technologies, ensuring reliability and performance" industry="Tech" companySize="100+" Year="20XX" />
       <div className="technology w-full min-h-[522px] bg-[#F0FBFA] flex justify-center items-center overflow-hidden">
          <div className="image ms-20">
            <TBanner banner={TalentBanner}/>
          </div>
          <div className="technology-use mt-36 ms-5">
            <h3 className='text-24/34 font-semibold mb-5'>Technologies Used</h3>
            <Technology/>
          </div>
        </div>
        <Skills/>
       </div>
    </>
  )
}

export default page
