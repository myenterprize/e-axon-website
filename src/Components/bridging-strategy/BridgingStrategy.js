"use client";
import React, { useEffect, useState } from "react";
import BridgingBg from '@/assets/svgs/bridging-bg.svg';
import BridgingBgSmall from '@/assets/svgs/mobile-bridging-bg.svg';
import Image from "next/image";
import Button from "../button/Button";
import Currency from '@/assets/images/Animation images/currency-converter.gif'
import CurrencyBackground from '@/assets/svgs/currency-background.svg';
import CurrencyLine from '@/assets/svgs/currency-line-bg.svg';

export default function BridgingStrategy() {
  const [image, setImage] = useState(BridgingBg);
  const [isBackground, setIsBackground] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 1024) {
        setImage(BridgingBgSmall);
        setIsBackground(true);
      } else {
        setImage(BridgingBg);
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
      <div className="w-full flex lg:flex-row flex-col items-center justify-between pb-0 lg:pb-[182px] xl:pl-0 pl-[30px]">
          <div className=" xl:w-[50%] w-full xl:pr-[70px] relative">
          <Image src={CurrencyBackground} alt="fa" className="w-[200px] md:w-[500px]" />
            <div className="currency-background w-full h-[110px] md:h-full md:max-h-[232px] max-w-[290px] md:max-w-[628px] absolute top-[11px] left-[9px] md:top-[30px] md:left-[65px] overflow-hidden !pr-[1px]">
            <Image src={Currency} alt="fa" className=" w-[100%] h-[100%] object-cover" />
            </div>
            <Image src={CurrencyLine} alt="currencyline" className="w-full max-w-[300px] md:max-w-[600px] absolute top-[-45px] md:top-[-80px] right-0 z-[-1] object-cover block lg:hidden"/>
          </div>
          <div
          className="flex flex-col items-start lg:items-center justify-center xl:w-[47%] w-full bg-cover bg-no-repeat h-[270px] md:h-[336px] mb-[33px]"
          style={{ backgroundImage: isBackground ? 'none' : `url(${image.src})` }}
        >
            <div className="xl:max-w-[426px] xl:pr-0 lg:pl-[80px] xl:pl-[5px] pr-[5px] lg:pr-[30px]">
              <div className="text-16/22 md:text-20/28 lg:text-24/34 text-black font-[700] mb-[10px] bg-white p-[8px] lg:ms-[80px] xl:ms-0">Bridging Strategy and Execution</div>
              <div className="text-12/15 md:text-14/18 lg:text-18/25 text-black font-normal mb-[15px] lg:mb-[68px] bg-white p-[8px] lg:ms-[80px] xl:ms-0">We bridge strategy and execution, focusing on core technology, scalability, and seamless digital experiences</div>
              <Button text="Initiate a Conversation" link="/" classes="w-[205px] px-[21px] py-[16px] lg:ms-[80px] xl:ms-0" />
            </div>
          </div>
      </div>
    </div>
  );
}
