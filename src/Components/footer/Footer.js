"use client";
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import React from "react";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // Updated to only include available weights
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const robotoFont = roboto.className;

export default function FooterSection() {

  const serviceLinks = [
    {name: 'Quality Assurance Testing Automation', link: '/'},
    {name: 'Custom Software Development', link: '/'},
    {name: 'Mobile Application Development', link: '/'},
    {name: 'Architectural Review', link: '/'},
    {name: 'Application & Infrastructure Modernization', link: '/'}
  ]
  
  return (
    <div className="flex bg-P2-900 py-[55px]">
      <div
        className="w-full max-w-[1071px] h-[380px] mx-auto flex md:flex-row flex-col justify-between items-start"
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
        </div>
        <div className="xl:w-[359px] w-full p-[8px]">
          <div className="p-[2px] text-white text-18/25 font-[700] pb-[11px] border-b-1 border-[#3CBCC3] border-opacity-[24%] mb-[36px]">e-axon</div>
        </div>
      </div>
    </div>
  );
}
