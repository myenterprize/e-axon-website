"use client";
import React, { useState } from "react";
import exonLogo from '@/assets/svgs/logo.svg';
import menuCloseIcon from '@/assets/svgs/menu-close.svg';
import arrowDown from '@/assets/svgs/arrow-down.svg';
import Image from "next/image";
import Link from "next/link";
import QualityIcon from '@/assets/svgs/what-we-do/quality.svg';
import ApplicationIcon from '@/assets/svgs/what-we-do/application.svg';
import MobileIcon from '@/assets/svgs/what-we-do/mobile-app.svg';
import ReviewIcon from '@/assets/svgs/what-we-do/review.svg';
import SoftwareIcon from '@/assets/svgs/what-we-do/software.svg';
import AiIcon from '@/assets/svgs/what-we-do/ai.svg';
import Close from '@/assets/svgs/cross-svg.svg';


export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    {
      row: [
        { serviceIcon: QualityIcon, title: 'Quality Assurance & Automation', link: "/quality-assurance" },
        { serviceIcon: SoftwareIcon, title: 'Custom Software Development', link: "/custom-software-development" },
        { serviceIcon: MobileIcon, title: 'Mobile Application Development', link: "/mobile-development" }
      ]
    },
    {
      row: [
        { serviceIcon: ApplicationIcon, title: 'Application & Infrastructure Modernization', link: "/application-infrastructure-modernization" },
        { serviceIcon: ReviewIcon, title: 'Architectural Review', link: "/architectural-review" },
        { serviceIcon: AiIcon, title: 'Artificial Intelligence', link: "/artificial-intelligence" }
      ]
    }
  ]

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between md:border-b-1 md:border-black md:border-opacity-[20%] transition-all">
          <div className="w-full px-[33px] md:px-[67.5px] mx-auto flex flex-wrap items-center justify-between py-[36px] sm:py-[13px]">
            <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
                href="/"
              >
                <Image src={exonLogo} alt="e-axon" width={100} height={50} />
              </Link>
              <button
                className="text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {!menuOpen ? (
                  <Image src={menuCloseIcon} alt="e-axon" />
                ) : (
                  <div
                    className="text-18/25 text-black font-medium"
                    href="/about"
                  >
                   <Image src={Close} alt="close-button" />
                  </div>
                )}
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (menuOpen ? " flex flex-col justify-between h-[calc(100vh-63px)] !items-start pt-[35px]" : " hidden")
              }
              id="example-navbar-info"
            >
              <ul
                className={`absolute left-0 top-[77px] z-[99] transition-all duration-300 ease-in-out w-full sm:block hidden bg-S1-50 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                <div className="w-full max-w-[1350px] px-[67px] mx-auto lg:py-[13px] sm:flex sm:gap-5 sm:py-[50px] lg:block xl:gap-0 lg:xl-[15px]">
                  {services.map((item, index) => (
                    <li key={index} className="w-[100%] p-2 flex flex-wrap justify-evenly items-center sm:gap-5">
                      {item.row.map((card, i) => (
                        <Link key={i} href={card.link} className="w-[100%] md:w-[300px] flex justify-start gap-5 items-center px-3 py-3 border-2 rounded-[8px] border-green-color hover:bg-S1-400 hover:text-white transition-all duration-300 ease-in-out flex-shrink-0">
                          <Image src={card.serviceIcon} alt="service" />
                          <p className="text-12/15 font-medium">{card.title}</p>
                        </Link>
                      ))}
                    </li>
                  ))}
                </div>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-x-8 gap-y-[25px] items-start lg:items-center">
                <li className="nav-item relative">
                  <button
                    className="text-18/25 text-black font-medium focus:outline-none flex items-center gap-x-[12px] xs:hover:border-l-4 hover:text-yellow-color xs:hover:border-yellow-color transition-all duration-100 ease-in-out px-[16px] py-[1.5px] lg:border-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Our Services
                    <Image src={arrowDown} alt="e-axon" />
                  </button>

                </li>
                <li className="nav-item">
                  <Link
                    className="text-18/25 text-black font-medium hover:border-l-4 hover:text-yellow-color hover:border-yellow-color transition-all duration-100 ease-in-out px-[16px] py-[1.5px] lg:border-none"
                    href="/work"
                  >
                    Our Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="text-18/25 text-black font-medium hover:border-l-4 hover:text-yellow-color hover:border-yellow-color transition-all duration-100 ease-in-out px-[16px] py-[1.5px] lg:border-none"
                    href="/who-we-are"
                  >
                    Who We Are
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-[68px] lg:w-auto w-full">
                <li className="nav-item">
                  <Link
                    className={
                      "w-[111px] h-[50px] rounded-[8px] border-1 border-[#075085] text-14/18 text-P2-800 hover:bg-[#075085] hover:text-white transition-all font-medium flex items-center justify-center " +
                      (menuOpen ? "!w-full" : "w-[111px]")
                    }
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul
        className={`absolute left-0 top-[0px] transition-all duration-300 ease-in-out w-full h-full sm:hidden block bg-white ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="w-full max-w-[1350px] px-[25px] mx-auto py-[13px] mt-[20px]">
        <button
                    className="text-18/25 text-black font-medium focus:outline-none flex items-center gap-x-[12px] mb-[30px] hover:text-yellow-color"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <Image className="rotate-90" src={arrowDown} alt="e-axon" />
                    Our Services
                  </button>
          {services.map((item, index) => (
            <li key={index} className="w-[100%] flex flex-wrap justify-start items-center">
              {item.row.map((card, i) => (
                <Link key={i} href={card.link} className="w-[300px] flex justify-start items-center py-[16px] transition-all duration-300 ease-in-out flex-shrink-0">
                  <p className="text-14/18 font-medium text-wrap">{card.title}</p>
                </Link>
              ))}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
