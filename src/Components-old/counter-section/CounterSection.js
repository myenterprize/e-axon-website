"use client";
import React from "react";
import LeftBorder from '@/assets/svgs/counter-left-border.svg';
import convera from '@/assets/svgs/convera.svg';
import rakuten from '@/assets/svgs/rakuten.svg';
import edge from '@/assets/svgs/edge.svg';
import Image from "next/image";

export default function CounterSection() {
  return (
    <div className="flex mb-[263px]">
      <div className="w-full max-w-[1190px] mx-auto flex items-center justify-between">
          <div className="flex xl:flex-row flex-col justify-center gap-x-[74px] w-full items-start">
            <div className="flex xl:w-[50%] w-full count-mob">
              <div className="pl-[22px] pt-[8px] flex flex-row xl:w-[50%] w-full">
                <div className="border-l-1 border-dashed border-[#075085] relative"><div className="w-[4px] h-[80px] rounded-full bg-[#075085] absolute -left-[2px] top-0"/></div>
                <div className="xl:h-[280px] pl-[14px]">
                  <div className="text-47/62 text-yellow-color font-[800] flex justify-left p-[8px] mb-[26px]">200+</div>
                  <div className="text-18/25 text-light-gray-color font-normal p-[8px] ">increase in global disruption between 2017 and 2022</div>
                </div>
              </div>
              <div className="pl-[22px] pt-[8px] flex flex-row xl:w-[50%] w-full">
                <div className="border-l-1 border-dashed border-[#075085] relative"><div className="w-[4px] h-[80px] rounded-full bg-[#075085] absolute -left-[2px] top-0"/></div>
                <div className="xl:h-[280px] pl-[14px]">
                  <div className="text-47/62 text-yellow-color font-[800] flex justify-left p-[8px] mb-[26px]">58%</div>
                  <div className="text-18/25 text-light-gray-color font-normal p-[8px] ">of CEOs are not confident in the current business strategy to strengthen future competitiveness</div>
                </div>
              </div>
            </div>
            
            <div className="flex xl:w-[50%] w-full count-mob">
              <div className="pl-[22px] pt-[8px] flex flex-row w-[50%]">
                <div className="border-l-1 border-dashed border-[#075085] relative"><div className="w-[4px] h-[80px] rounded-full bg-[#075085] absolute -left-[2px] top-0"/></div>
                <div className="xl:h-[280px] pl-[14px]">
                  <div className="text-47/62 text-yellow-color font-[800] flex justify-left p-[8px] mb-[26px]">2.5x</div>
                  <div className="text-18/25 text-light-gray-color font-normal p-[8px] ">the increased likelihood of outperforming peers when emerging technology informs and shapes strategy</div>
                </div>
              </div>
              <div className="pl-[22px] pt-[8px] flex flex-row w-[50%]">
                <div className="border-l-1 border-dashed border-[#075085] relative"><div className="w-[4px] h-[80px] rounded-full bg-[#075085] absolute -left-[2px] top-0"/></div>
                <div className="xl:h-[280px] pl-[14px]">
                  <div className="text-47/62 text-yellow-color font-[800] flex justify-left p-[8px] mb-[26px]">10%</div>
                  <div className="text-18/25 text-light-gray-color font-normal p-[8px] ">higher revenue growth realized by companies embracing reinvention</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
