"use client";
import React, { useState } from "react";
import exonLogo from '@/assets/svgs/logo.svg';
import menuCloseIcon from '@/assets/svgs/menu-close.svg';
import arrowDown from '@/assets/svgs/arrow-down.svg';
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between border-b-1 border-black border-opacity-[20%] transition-all">
          <div className="w-full px-[67px] mx-auto flex flex-wrap items-center justify-between py-[13px] ">
            <div className="w-full relative flex justify-between items-center lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
                href="/"
              >
                <Image src={exonLogo} alt="e-axon" width={100} height={50} />
              </Link>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                    x
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
                className={`absolute left-0 top-[77px] transition-all duration-300 ease-in-out w-full bg-S1-50 ${
                  dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="w-full max-w-[1350px] px-[67px] mx-auto flex flex-wrap items-center justify-between py-[13px] ">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/services/service1">Service 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/services/service2">Service 2</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/services/service3">Service 3</Link>
                  </li>
                </div>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-x-8">
                <li className="nav-item relative">
                  <button
                    className="text-18/25 text-black font-medium focus:outline-none flex items-center gap-x-[12px]"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Our Services
                    <Image src={arrowDown} alt="e-axon" />
                  </button>
                  
                </li>
                <li className="nav-item">
                  <Link
                    className="text-18/25 text-black font-medium"
                    href="/work"
                  >
                    Our Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="text-18/25 text-black font-medium"
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
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
