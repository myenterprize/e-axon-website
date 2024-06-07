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
            <div className="text-18/25 text-black font-normal xl:mb-0 mb-[14px]">We are the trusted choice of  many businesses</div>
          </div>
          <div className="flex items-center xl:w-[55%] gap-x-[74px] bg-P2-50 border-l-[3px] border-[#075085] h-[104px] xl:pl-[55px] xl:pr-[80px] pl-4 pr-y w-full justify-center">
            <Link href={"/thefa"}><Image src={faLogo} alt="fa" /></Link>
            <Link href={"/convera"}><Image src={convera} alt="convera" /></Link>
            <Link href={"/rakuten"}><Image src={rakuten} alt="rakuten" /></Link>
            <Link href={"/edge"}><Image src={edge} alt="edge" /></Link>
          </div>
      </div>
    </div>
  );
}
