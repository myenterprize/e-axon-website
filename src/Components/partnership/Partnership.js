"use client";
import React, { useEffect, useState } from "react";
import PartnershipTextBg from '@/assets/svgs/partnership/partnership-text-bg.svg';
import PartnershipBg from '@/assets/svgs/partnership/partnership-banner.svg';
import PartnershipBgSmall from '@/assets/svgs/partnership/partnership-banner-small.svg';
import Image from "next/image";
import Button from "../button/Button";

export default function Partnership() {
  const [image, setImage] = useState(PartnershipBg);
  const [isBackground, setIsBackground] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 1280) {
        setImage(PartnershipBgSmall);
        setIsBackground(true);
      } else {
        setImage(PartnershipBg);
        setIsBackground(false);
      }
    };

    updateImage(); // Set the initial background image
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);
  return (
    <div className="flex">
      <div className="w-full xl:flex-row flex-col-reverse flex items-center justify-between pb-[100px] md:pb-[166px]">
        <div
          className="flex flex-col items-center justify-center xl:w-[50%] bg-cover bg-no-repeat h-[100%]"
          style={{ backgroundImage: isBackground ? "none" : `url(${PartnershipTextBg.src})` }}
        >
          <div className="xl:max-w-[426px] w-full xl:px-0 px-[30px]">
            <div className="text-16/22 md:text-24/34 text-black font-[700] mb-[8px] bg-white p-[8px]">Collaborative Partnership</div>
            <div className="text-12/17 md:text-18/25 text-black font-normal mb-[15px] md:mb-[68px] bg-white p-[8px]">Through collaborative partnerships, we tailor solutions from planning to testing, guiding every step.</div>
            <Button text="Get to know us" link="/who-we-are" classes="w-[145px] px-[16px] py-[21px]" />
          </div>
        </div>
      
        <div className="flex xl:w-[50%] w-full xl:mb-0 mb-7">
          <Image src={image} alt="fa" className="w-full" />
        </div>
      </div>  
    </div>
  );
}
