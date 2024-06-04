"use client";
import React from "react";
import CallToActionBg from '@/assets/svgs/call-to-action.svg';
import Button from "../button/Button";

export default function CallToAction() {
  
  return (
    <div className="flex mb-[161px] md:px-0 px-[30px]">
      <div
        className="w-full max-w-[1071px] h-[380px] mx-auto flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${CallToActionBg.src})` }}
      >
        <div className="text-24/34 text-[#000000] font-[700] bg-white mb-[68px] text-center">Ready to unleash your digital potential with us?</div>
        <Button text="Get in Touch " link="/" classes="!text-18/25 w-[155px]" />
      </div>
    </div>
  );
}
