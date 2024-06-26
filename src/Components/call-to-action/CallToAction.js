"use client";
import React, { useEffect, useState } from "react";
import CallToActionBg from '@/assets/svgs/call-to-action.svg';
import CallToActionBgSmall from '@/assets/svgs/call-to-action-small.svg';
import Button from "../button/Button";

export default function CallToAction() {

  const [image, setImage] = useState(CallToActionBg)

  useEffect(() => {
    const updateImage = () => {
       if(window.innerWidth < 768){
    setImage(CallToActionBgSmall)
  } else {
    setImage(CallToActionBg)
  }
    };

    updateImage(); // Set the initial background image
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);

 
  
  return (
    <div
      className="flex my-[50px] md:mb-[161px] md:px-0 px-[30px] w-full"
      style={{ backgroundImage: `url(${image.src})`, backgroundSize:"85%", backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
    >
      <div
        className="w-full max-w-[280px] h-[160px] md:max-w-[1071px] md:h-[380px] mx-auto flex flex-col justify-center items-center"
        
      >
        <div className="text-16/22 md:text-24/34 text-[#000000] font-[700] bg-transparent mb-[16px] md:mb-[68px] text-center">Ready to unleash your digital potential with us?</div>
        <Button text="Get in Touch " link="/contact-us" classes="!text-12/15 md:!text-18/25 w-[122px] md:w-[155px]" />
      </div>
    </div>
  );
}
