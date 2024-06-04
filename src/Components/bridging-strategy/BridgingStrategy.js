"use client";
import React, { useEffect, useState } from "react";
import CurrencyConverter from '@/assets/svgs/currency-converter.svg';
import BridgingBg from '@/assets/svgs/bridging-bg.svg';
import BridgingBgSmall from '@/assets/svgs/mobile-bridging-bg.svg';
import Image from "next/image";
import Button from "../button/Button";

export default function BridgingStrategy() {
  const [image, setImage] = useState(CurrencyConverter);
  const [isBackground, setIsBackground] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 1280) {
        setImage(BridgingBgSmall);
        setIsBackground(true);
      } else {
        setImage(CurrencyConverter);
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
      <div className="w-full flex xl:flex-row flex-col items-center justify-between pb-[182px] xl:pl-0 pl-[30px]">
          <div className="flex xl:w-[50%] w-full xl:pr-[70px]">
            <Image src={image} alt="fa" className="w-full" />
            
          </div>
          <div
          className="flex flex-col items-center justify-center xl:w-[50%] w-full bg-cover bg-no-repeat h-[336px]"
          style={{ backgroundImage: !isBackground ? 'none' : `url(${BridgingBg})` }}
        >
            <div className="xl:max-w-[426px] xl:pr-0 pr-[50px]">
              <div className="text-24/34 text-black font-[700] mb-[16px] bg-white p-[8px]">Bridging Strategy and Execution</div>
              <div className="text-18/25 text-black font-normal mb-[68px] bg-white p-[8px]">We bridge strategy and execution, focusing on core technology, scalability, and seamless digital experiences</div>
              <Button text="Initiate a Conversation" link="/" classes="w-[205px]" />
            </div>
          </div>
      </div>
    </div>
  );
}
