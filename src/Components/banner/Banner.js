"use client";
import React from "react";
import yellowTick from '@/assets/svgs/yellow-tick.svg';
import mainBanner from '@/assets/svgs/main-banner.svg';
import BannerLable1 from '@/assets/images/banner/banner-lable-1.png';
import BannerLable2 from '@/assets/images/banner/banner-lable-2.png';
import BannerLable3 from '@/assets/images/banner/banner-lable-3.png';
import BannerLable4 from '@/assets/images/banner/banner-lable-4.png';
import BannerLable5 from '@/assets/images/banner/banner-lable-5.png';

import BannerLableMob1 from '@/assets/images/banner/mobile/banner-lable-mob-1.png';
import BannerLableMob2 from '@/assets/images/banner/mobile/banner-lable-mob-2.png';
import BannerLableMob3 from '@/assets/images/banner/mobile/banner-lable-mob-3.png';
import BannerLableMob4 from '@/assets/images/banner/mobile/banner-lable-mob-4.png';
import BannerLableMob5 from '@/assets/images/banner/mobile/banner-lable-mob-5.png';
import Image from "next/image";
import Button from "../button/Button";


export default function Banner() {
  return (
    <div className="flex">
      <div className="w-full xl:flex-row flex-col xl:pl-[180px] xl:pr-0 xl:ml-auto flex xl:items-start justify-between pb-[45px]">
          <div className="flex flex-col xl:max-w-[505px] w-full max-w-full mt-[21px] md:mt-[70px] md:pl-[67px] md:pr-[67px] pr-[0px] pl-[0px] xl:pr-0 xl:pl-0">
            <div className="md:text-47/62 text-24/32.4 text-blue-color font-[800] w-full xl:max-w-[400px] max-w-full mb-[21px] xl:pr-3 md:px-0 px-[30px]">Unlock the potential of your <span className="text-green-color">digital journey</span> with innovation</div>
            <div className="mt-[20px] md:hidden flex justify-end banner-container">
              <Image src={mainBanner} alt="e-axon" />
              <div className="lable1"><Image src={BannerLableMob1} alt="e-axon" /></div>
              <div className="lable2"><Image src={BannerLableMob2} alt="e-axon" /></div>
              <div className="lable3"><Image src={BannerLableMob3} alt="e-axon" /></div>
              <div className="lable4"><Image src={BannerLableMob4} alt="e-axon" /></div>
              <div className="lable5"><Image src={BannerLableMob5} alt="e-axon" /></div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center gap-[14px] mb-[33px] md:px-0 px-[30px]">
              <div className="flex items-start gap-x-[6px] md:text-16/22 text-12/17 font-medium text-yellow-color whitespace-nowrap"><Image src={yellowTick} alt="e-axon" />Fast Turnarounds</div>
              <div className="flex items-start gap-x-[6px] md:text-16/22 text-12/17 font-medium text-yellow-color whitespace-nowrap"><Image src={yellowTick} alt="e-axon" />Technical Excellence</div>
              <div className="flex items-start gap-x-[6px] md:text-16/22 text-12/17 font-medium text-yellow-color whitespace-nowrap"><Image src={yellowTick} alt="e-axon" />Fair Pricing</div>
            </div>
            <Button text="Contact Us" link="/contact-us" classes="md:!text-18/25 !text-14/18 md:w-[142px] w-[111px]  md:ml-0 ml-[30px]"/>
          </div>
          <div className="mt-[36px] md:flex hidden justify-end banner-container">
            <Image src={mainBanner} alt="e-axon" />
            <div className="lable1"><Image src={BannerLable1} alt="e-axon" /></div>
            <div className="lable2"><Image src={BannerLable2} alt="e-axon" /></div>
            <div className="lable3"><Image src={BannerLable3} alt="e-axon" /></div>
            <div className="lable4"><Image src={BannerLable4} alt="e-axon" /></div>
            <div className="lable5"><Image src={BannerLable5} alt="e-axon" /></div>
          </div>
      </div>
    </div>
  );
}
