import React from 'react'
import Image from 'next/image'


const HeroSection = ({heroImage, aboutText, industry, companySize, Year}) => {
  return (
    <div className='w-full max-w-[813px] h-[436px] mt-[22px] mb-[176px] bg-black relative'>
      <Image src={heroImage} style={{width: "100%"}}/>
      <div className="company-details w-[403px] h-[124px] bg-[#F0FBFA] text-center border-1 border-[#0B3E6685] rounded-15 text-[#0B3E66] absolute bottom-[-30px] left-[-92px] drop-shadow-lg">
        <table className='w-full h-full'>
          <tbody>
          <tr className='text-14/18 font-poppins font-medium border-b-1 border-[#0B3E6685]'>
            <td className='border-r-1 border-[#0B3E6685] border-dashed'>Industry</td>
            <td className='border-r-1 border-[#0B3E6685] border-dashed'>Company Size</td>
            <td>Year Founded</td>
          </tr>
          <tr className='text-24/34 font-poppins font-bold'>
            <td className='border-r-1 border-[#0B3E6685] border-dashed'>{industry}</td>
            <td className='border-r-1 border-[#0B3E6685] border-dashed'>{companySize}</td>
            <td>{Year}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="company-about w-full max-w-[421px] h-[292px] bg-[#F0FBFA] absolute bottom-[-56px] right-[-225px] rounded-15 py-[22px] px-[35px] drop-shadow-lg">
        <p className='text-16/22 text-black font-normal'>{aboutText}</p>
      </div>
    </div>
  )
}

export default HeroSection
