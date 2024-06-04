"use client"
import Brand from '@/Components/brand/Brand'
import HeroSection from '@/Components/hero-section/HeroSection'
import Menu from '@/Components/menu/Menu'
import TheFA from '@/assets/svgs/fa.svg'
import HeroThFA from '@/assets/images/hero-thefa.jpg'
import React from 'react'

const page = () => {
  return (
    <>
      <Menu />
      <div className="w-full min-h-[100vh] flex flex-col justify-start items-center my-53">
        <Brand logo={TheFA} title="A collaborative effort to provide customized solutions for player management and data tools." />
        <HeroSection heroImage={HeroThFA} aboutText="Edge a leading California-based outsourcing firm, relies on E-Axon's innovative platform for efficient offshore hiring solutions. With our platform, clients seamlessly manage offshore teams and payroll, leveraging detailed employee profiles for optimal team matching. Powered by AWS infrastructure, our platform operates smoothly with Node.js and React technologies, ensuring reliability and performance" industry="Tech" companySize="100+" Year="20XX" />
      </div>
    </>
  )
}

export default page
