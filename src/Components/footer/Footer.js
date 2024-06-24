"use client";
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import React from "react";
import Image from 'next/image';
import Message from '@/assets/svgs/message.svg'
import Location from '@/assets/svgs/location.svg'
import Mobile from '@/assets/svgs/mobile.svg'
import LinkdeIn from '@/assets/svgs/linkedIn.svg'
import Twitter from '@/assets/svgs/twitter.svg'
import Facebook from '@/assets/svgs/facebook.svg'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // Updated to only include available weights
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const robotoFont = roboto.className;

export default function FooterSection() {

  const serviceLinks = [
    {name: 'Quality Assurance Testing Automation', link: '/quality-assurance'},
    {name: 'Custom Software Development', link: '/custom-software-development'},
    {name: 'Mobile Application Development', link: '/mobile-development'},
    {name: 'Architectural Review', link: '/architectural-review'},
    {name: 'Application & Infrastructure Modernization', link: '/application-infrastructure-modernization'}
  ]

  const getInTouch = [
    {icon: Message, text: "info@e-axon.com"},
    {country:"UK",icon: Location, text: "9 Edgeworth Close, Langley SL3 7FS United Kingdom"},
    {icon: Mobile, text: "+44 7867 604011"},
    {country:"Pakistan",icon: Location, text: "Office # 3207, 3rd Floor, NSTP, NUST, H12 Islamabad, Pakistan"},
    {icon: Mobile, text: "+92 518895448"},
  ]

  // const copyToClipboard = (text) => {
  //   navigator.clipboard.writeText(text).then(() => {
  //     // alert('Text copied to clipboard!');
  //   }).catch(err => {
  //     console.error('Failed to copy text: ', err);
  //   });
  // };
  
  return (
    <div className="flex bg-P2-900 py-[55px]">
      <div
        className="w-full max-w-[1071px] mx-auto flex md:flex-row flex-col justify-between items-start"
      >
        <div className="xl:w-[283px] w-full p-[8px]">
          <div className="p-[2px] text-white text-18/25 font-[700] pb-[11px] border-b-1 border-[#3CBCC3] border-opacity-[24%] mb-[36px]">Service</div>
          <div>
            {serviceLinks.map((item, index) => (
              <Link
                className={`text-[14px] leading-[19.04px] text-green-color mb-[16px] block ${robotoFont}`}
                href={item.link}
                key={index}
              >
                {item.name}
              </Link>
            ))}
            
          </div>
        </div>
        <div className="xl:w-[277px] w-full p-[8px]">
          <div className="p-[2px] text-white text-18/25 font-[700] pb-[11px] border-b-1 border-[#3CBCC3] border-opacity-[24%] mb-[36px]">Get in Touch</div>
          <div>
            {getInTouch.map((item, index) =>(  
              <div key={index}>
                 <p className={`text-14/18 font-medium text-green-color mb-3 ${robotoFont}`}>{item.country}</p>
              <div className='flex justify-start items-center gap-[15px] mb-5'>
              <Image src={item.icon} alt='footer-icon'/>
              <p className={`text-12/15 text-white font-normal ${robotoFont}`}>{item.text}</p>
              </div>
             </div>))}
          </div>
        </div>
        <div className="xl:w-[359px] w-full p-[8px]">
          <div className="p-[2px] text-white text-18/25 font-[700] pb-[11px] border-b-1 border-[#3CBCC3] border-opacity-[24%] mb-[36px]">e-axon</div>
          <div className='flex flex-col justify-between items-start'>
            <p className={`text-16/22 font-medium text-green-color mb-[25px] ${robotoFont}`}>Our Family</p>
            <p className={`text-14/18 font-normal text-white ${robotoFont}`}>A group of software developers , passionate about code quality and meeting customer’s needs.
            We have devised our own lean methodology, based on trust, openness, and flat a hierarchy.</p>
            <div className='flex gap-3 mt-[100px]'>
              <Link href={'/'}>
              <Image src={LinkdeIn} alt='social' /></Link>
              <Link href={'/'}>
              <Image src={Twitter} alt='social' /></Link>
             <Link href={'/'}>
             <Image src={Facebook} alt='social' /></Link>
            </div>
            <p className={`text-12/15 font-light text-white mt-[20px] ${robotoFont}`}>@ copyright [enter date] e-axon.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
