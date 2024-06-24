"use client";
import React from "react";
import faLogo from '@/assets/svgs/fa.svg';
import convera from '@/assets/svgs/convera.svg';
import rakuten from '@/assets/svgs/rakuten.svg';
import edge from '@/assets/svgs/edge.svg';
import Image from "next/image";
import Link from "next/link";

export default function TrustedBusiness() {
  return (
    <div className="flex">
      <div className="w-full xl:flex-row flex-col max-w-full xl:pl-[180px] ml-auto flex items-center justify-between pb-[176px]">
          <div className="flex flex-col max-w-[505px]">
            <div className="md:text-18/25 text-12/17 text-black font-normal xl:mb-0 mb-[14px]">We are the trusted choice of  many businesses</div>
          </div>
          <div className="flex items-center xl:w-[55%] md:gap-x-[74px] gap-x-[19px] bg-P2-50 md:border-l-[3px] border-[#075085] md:h-[104px] h-[52px] xl:pl-[55px] xl:pr-[80px] md:pl-4 md:pr-0 px-[32px] w-full justify-center">
            <Link href={"/thefa"}><Image className="md:w-auto w-[25px]" src={faLogo} alt="fa" /></Link>
            <Link href={"/convera"}><Image className="md:w-auto w-[80px]" src={convera} alt="convera" /></Link>
            <Link href={"/rakuten"}><Image className="md:w-auto w-[72px]" src={rakuten} alt="rakuten" /></Link>
            <Link href={"/edge"}><Image className="md:w-auto w-[62px]" src={edge} alt="edge" /></Link>
          </div>
      </div>
    </div>
  );
}
