"use client"
import Brand from '@/Components/brand/Brand'
import HeroSection from '@/Components/hero-section/HeroSection'
import Menu from '@/Components/menu/Menu'
import Convera from '@/assets/svgs/convera.svg'
import HeroConvera from '@/assets/images/hero-convera.jpg'
import React from 'react'

const page = () => {
  return (
    <>
      <Menu />
      <div className="w-full min-h-[100vh] flex flex-col justify-start items-center my-53">
        <Brand logo={Convera} title="A peek into how we gave customers world wide, a better way to move money." />
        <HeroSection heroImage={HeroConvera} aboutText="Edge a leading California-based outsourcing firm, relies on E-Axon's innovative platform for efficient offshore hiring solutions. With our platform, clients seamlessly manage offshore teams and payroll, leveraging detailed employee profiles for optimal team matching. Powered by AWS infrastructure, our platform operates smoothly with Node.js and React technologies, ensuring reliability and performance" industry="Tech" companySize="100+" Year="20XX" />
      </div>
    </>
  )
}

export default page
