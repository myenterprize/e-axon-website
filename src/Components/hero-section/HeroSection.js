import React from 'react'
import Image from 'next/image'


const HeroSection = ({heroImage, aboutText, industry, companySize, Year}) => {
  return (
    <div className='w-full max-w-[813px] mt-[22px] mb-[36px] lg:mb-[176px] relative px-[15px]'>
      <Image src={heroImage} alt='hero banner' style={{width: "100%"}}/>
      <div className="company-details w-full max-w-[312px] h-[90px] px-5 py-5 md:max-w-[380px] lg:w-[403px] lg:h-[124px] bg-S1-50 text-center border-1 border-blue-150 border-opacity-50 rounded-[8px] text-blue-color relative bottom-[45px] md:absolute md:bottom-[210px]  md:left-[25%] md:z-20  lg:bottom-[-30px] lg:left-[-92px] drop-shadow-lg">
        <table className='w-full h-full'>
          <tbody>
          <tr className='text-12/15 font-poppins font-medium border-b-1 border-blue-150 border-opacity-50'>
            <td className='border-r-1 border-blue-150 border-opacity-50 border-dashed'>Industry</td>
            <td className='border-r-1 border-blue-150 border-opacity-50 border-dashed'>Company Size</td>
            <td>Year Founded</td>
          </tr>
          <tr className='text-18/25 md:text-24/34 font-poppins font-bold'>
            <td className='border-r-1 border-blue-150 border-opacity-50 border-dashed'>{industry}</td>
            <td className='border-r-1 border-blue-150 border-opacity-50 border-dashed'>{companySize}</td>
            <td>{Year}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="company-about  w-full h-auto lg:max-w-[350px] xl:max-w-[421px] lg:h-[350px] xl:h-[292px] bg-S1-50 relative top-[-35px] lg:absolute lg:top-[170px] lg:right-[-90px] xl:right-[-225px] rounded-15 py-[22px] px-[15px] md:px-[35px] drop-shadow-lg md:text-start text-center">
        <p className='text-14/18 md:pt-[65px] md:text-16/22 lg:pt-0 text-black font-normal'>{aboutText}</p>
      </div>
    </div>
  )
}

export default HeroSection
