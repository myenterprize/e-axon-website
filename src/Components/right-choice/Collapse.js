import Image from 'next/image';
import { useState, useRef } from 'react';
import arrowDown from '@/assets/svgs/arrow-down.svg';

const Collapsible = ({ text, subText, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 bg-white px-[16px] py-[18px] md:px-[22px] md:py-[16px] rounded-[8px] focus:outline-none border-1 border-[#B6EAEB75] collapse-shadow flex justify-between items-center w-full"
      >
        {/* {isOpen ? 'Collapse' : 'Expand'} */}
        <div className='flex items-center text-12/15 md:text-18/25 text-blue-color font-[700] gap-[8px] text-left md:gap-[25px]'><div className='w-[16px] h-[20px] md:w-[42px] md:h-[42px] flex items-center justify-center'><Image src={icon} alt="e-axon" /></div> {text}</div> <Image src={arrowDown} alt="e-axon" />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden -mt-[5px]`}
      >
        <div className="md:py-[24px] py-[12px] px-[25px] text-start md:px-[75px] bg-P2-200 rounded-b-[8px] text-12/17 md:text-18/25 text-black font-normal">
          {subText}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
