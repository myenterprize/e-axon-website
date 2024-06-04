"use client";
import React from "react";
import SwiftIcon from '@/assets/svgs/collapse-icons/swift.svg';
import PricingIcon from '@/assets/svgs/collapse-icons/pricing.svg';
import AccountIcon from '@/assets/svgs/collapse-icons/account.svg';
import HeartIcon from '@/assets/svgs/collapse-icons/heart.svg';
import Collapsible from "./Collapse";

export default function RightChoice() {
  return (
    <div className="flex">
      <div className="w-full flex xl:flex-row flex-col items-start justify-between mb-[196px] bg-P2-50 py-[46px] xl:px-0 px-[30px]">
          <div className="flex xl:w-[50%] w-full xl:justify-center xl:mb-0 mb-[34px]">
            <div className="xl:text-34/48 text-16/22 text-[#0B3E66] font-[800] flex justify-left">What makes us the right choice?</div>
          </div>
          <div
            className="flex flex-col items-center justify-center xl:w-[50%] w-full bg-cover bg-no-repeat xl:pr-[70px]"
          >
            <div className="flex flex-col items-center justify-center gap-[26px]">
              <Collapsible text="Swift Turnarounds" subText="Swift Turnarounds Swift Turnarounds Swift Turnarounds Swift Turnarounds" icon={SwiftIcon} />
              <Collapsible text="Pricing" subText="Swift Turnarounds Swift Turnarounds Swift Turnarounds Swift Turnarounds" icon={PricingIcon} />
              <Collapsible text="Accountability & Dependability" subText="Swift Turnarounds Swift Turnarounds Swift Turnarounds Swift Turnarounds" icon={AccountIcon} />
              <Collapsible text="Post Delivery Services" subText="Swift Turnarounds Swift Turnarounds Swift Turnarounds Swift Turnarounds" icon={HeartIcon} />
            </div>
          </div>
      </div>
    </div>
  );
}
