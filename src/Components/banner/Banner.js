"use client";
import React from "react";
import yellowTick from '@/assets/svgs/yellow-tick.svg';
import mainBanner from '@/assets/svgs/main-banner.svg';
import Image from "next/image";
import Button from "../button/Button";

export default function Banner() {
  return (
    <div className="flex">
      <div className="w-full xl:flex-row flex-col xl:pl-[180px] xl:pr-0 xl:ml-auto flex xl:items-start justify-between pb-[45px]">
          <div className="flex flex-col xl:max-w-[505px] w-full max-w-full mt-[64px] pl-[67px] pr-[67px] xl:pr-0 xl:pl-0">
            <div className="text-47/62 text-blue-color font-[800] w-full xl:max-w-[400px] max-w-full mb-[42px] xl:pr-3">Unlock the potential of your <span className="text-green-color">digital journey</span> with innovation</div>
            <div className="flex md:flex-row flex-col md:items-center gap-[14px] mb-[33px]">
              <div className="flex items-start gap-x-[6px] text-16/22 font-medium text-yellow-color whitespace-nowrap"><Image src={yellowTick} alt="e-axon" />Fast Turnarounds</div>
              <div className="flex items-start gap-x-[6px] text-16/22 font-medium text-yellow-color whitespace-nowrap"><Image src={yellowTick} alt="e-axon" />Technical Excellence</div>
              <div className="flex items-start gap-x-[6px] text-16/22 font-medium text-yellow-color whitespace-nowrap"><Image src={yellowTick} alt="e-axon" />Fair Pricing</div>
            </div>
            <Button text="Contact Us" link="/contact" classes="!text-18/25 w-[142px]" />
          </div>
          <div className="mt-[36px] flex justify-end"><Image src={mainBanner} alt="e-axon" /></div>
      </div>
    </div>
  );
}
