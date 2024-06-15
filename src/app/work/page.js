"use client"
import AboutTitle from '@/Components/about-section/about-title/AboutTitle'
import CallToAction from '@/Components/call-to-action/CallToAction'
import FooterSection from '@/Components/footer/Footer'
import Menu from '@/Components/menu/Menu'
import WorkStudy from '@/Components/work-section/case-study/WorkStudy'
import ConveraWork from '@/assets/images/convera-work.jpg'
import EdgeWork from '@/assets/images/edge-work.jpg'
import FAWork from '@/assets/images/fa-work.jpg'
import Java from '@/assets/svgs/java-logo.svg'
import Oracle from '@/assets/svgs/oracle-logo.svg'
import IBMLogo from '@/assets/svgs/ibm.svg'
import Apache from '@/assets/svgs/apachee.svg'
import Leaf from '@/assets/svgs/leaf-logo.svg'
import Hibernate from '@/assets/svgs/hibernate.svg'
import ReactLogo from '@/assets/svgs/react-logo.svg'
import CircleOralce from '@/assets/svgs/circle-oracle.svg'
import MongoDb from '@/assets/svgs/mongodb.svg'
import Angular from '@/assets/svgs/angular.svg'
import JSLogo from '@/assets/svgs/js-logo.svg'
import Postgre from '@/assets/svgs/postgresql.svg'
import Square from '@/assets/svgs/square-logo.svg'
import MySql from '@/assets/svgs/mysql.svg'
import Python from '@/assets/svgs/python.svg'
import SqlServer from '@/assets/svgs/sql-server.svg'
import Firebase from '@/assets/svgs/firebase.svg'
import Flutter from '@/assets/svgs/flutter.svg'
import React from 'react'
import Image from 'next/image'

const page = () => {

  const logoArray = [
    {
      row: [
        {logo: Java},
        {logo: Oracle},
        {logo: IBMLogo},
        {logo: Apache},
      ]
    },
    {
      row: [
        {logo: Leaf},
        {logo: Hibernate},
        {logo: ReactLogo},
        {logo: CircleOralce},
        {logo: MongoDb},
      ]
    },
    {
      row: [
        {logo: Angular},
        {logo: JSLogo},
        {logo: Postgre},
        {logo: Square}
      ]
    },
    {
      row: [
        {logo: MySql},
        {logo: Python},
        {logo: SqlServer},
        {logo: Firebase},
        {logo: Flutter}
      ]
    },
  ]

  const logoGrid = logoArray.map((logo, index) => {
    return (
        <div key={index} className={`flex justify-center items-center gap-x-2 md:gap-x-[20px] lg:gap-x-[55px]`}>
          {logo.row.map((item, i) => (
            <div key={i} className="mb-2 md:mb-[12px] lg:mb-[25px]">
              <Image className='w-[55px] md:w-[90px] md:h-[90px] h-[55px]' src={item.logo} />
            </div>
          ))}
        </div>
    )
  })

  return (
    <>
    <Menu/>
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <AboutTitle title={"Selected Projects"} desc={"This showcase features a tiny fraction of the websites we have done for our amazing clients over the years. We include case studies that cover various areas of our expertise in  front-end  and back-end development, and integrations with different platforms."} workClasses={"text-18/25 md:text-47/62 font-extrabold"}/>
      <div className="convera-work w-full md:px-[50px] my-[60px] lg:my-0 xl:h-screen lg:mb-[100px]">
        <WorkStudy isLeftBox={false} workImage={ConveraWork} cardTitle={"Convera"} cardDesc={"A peek into how we gave customers world wide a better way to move money"} cardPath={'/convera'}/>
      </div>
      <div className="edge-work w-full lg:px-[50px] mt-[60px] mb-0 lg:my-0 bg-P2-50 flex flex-col justify-center items-center pb-[80px]">
        <WorkStudy isLeftBox={true} workImage={EdgeWork} cardTitle={"Edge"} cardDesc={"A California outsourcing firm uses E-axon's platform for offshore hiring."} cardPath={'/edge'} cardColor={"#075085"} classes={"ms-[60px]"}/>
      </div>
      <div className="fa-work w-full md:px-[50px] my-[60px] lg:my-0">
        <WorkStudy isLeftBox={false} workImage={FAWork} cardTitle={"Club Engagements x The FA"} cardDesc={"A collaborative effort to provide customized solutions for player management and data tools"} cardPath={'/thefa'} cardColor={"#EBA63F"}/>
      </div>
      <div className="partner-section w-full flex flex-col justify-center items-center py-[20px] md:py-[70px] bg-P1-50 mb-0 md:mb-[140px] mt-[50px] lg:mt-0">
        <h3 className='text-16/22 md:text-24/34 text-black font-extrabold'>Technologies we work with</h3>
        <div className='md:w-[657px] md:h-[448px] mt-[40px] md:mt-[60px]'>
        {logoGrid}
        </div>
      </div>
      <CallToAction/>
    </div>
    <FooterSection/>
    </>
  )
}

export default page