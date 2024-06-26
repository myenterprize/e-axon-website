import FooterSection from '@/Components/footer/Footer'
import Menu from '@/Components/menu/Menu'
import ServiceTitle from '@/Components/services-component/service-title/ServiceTitle'
import React from 'react'
import Image from 'next/image'
import ContactImage from '@/assets/images/contact-us.jpg'
import SquareLine from '@/assets/svgs/square-pattern-balck.svg'

const page = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
     <Menu/>
     <div className='w-full mb-[190px] md:mb-[30px] md:py-[40px] flex flex-col justify-center items-center sm:px-[32px]'>
      <ServiceTitle title={"Let’s explore the possibility of working together"} subTitle={"We collaborate closely with you to grasp your business requirements, objectives, and vision. Through attentive listening, we craft a comprehensive action plan detailing the steps to realize your project"} h2classes='px-[41px] sm:px-0' pclasses='lg:!text-16/22 !pt-[12px] md:px-[45px] px-[40px]'containerclass='lg:!w-[950px] lg:!pt-[16px] !px-0 sm:!px-[38px]'/>
      <div className='pt-[15px] w-full lg:w-[900px] relative md:mb-[200px]'>
        <Image className='mx-auto w-[295px] sm:w-full rounded-[8px]  md:max-w-[100%]' src={ContactImage} alt='contact us'/>
        <Image className='w-[100%] absolute bottom-[-160px]' src={SquareLine} alt='contact us Line'/>
        <div className="contact-card h-[137px] w-[263px] px-[8px] py-[15px] md:w-[85%] sm:h-[160px] md:h-[200px] lg:w-[800px] lg:h-[180px] rounded-[8px] text-center md:text-start bg-S1-400 md:px-[38px] md:py-[20px] absolute left-1/2 -translate-x-1/2 bottom-[-100px] lg:bottom-[-60px] lg:left-[202px] lg:-translate-x-0">
          <h3 className='text-12/17 md:text-24/34 font-bold text-white'>Schedule a meeting with us</h3>
          <p className='text-9/12 text-white sm:text-12/15 md:text-14/18 font-light  md:font-normal py-[8px] md:mb-3'>Select a suitable time slot and have a call with one of our experts to discuss your needs.</p>
          <button className='text-12/15 px-[10px] py-[15px] font-normal rounded-[4px] mt-[7px] md:rounded-[8px] bg-P2-900 hover:bg-[#0b3f66d2] md:w-[135px] md:h-[60px] md:mb-2 md:text-14/18 md:font-medium text-white md:float-end'>
          Go to Calendar
          </button>
        </div>
      </div>
     </div>
     <FooterSection/> 
    </div>
  )
}

export default page
