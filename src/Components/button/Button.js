"use client";
import React from "react";
import Link from "next/link";

export default function Button({text, link, classes}) {
  return (
    <Link
      className={`bg-P2-900 px-[16px] py-[14px] md:px-[21px] md:py-[21px] text-white rounded-[8px] hover:bg-opacity-90 transition-all text-12/15 md:text-14/18 flex items-center justify-center  ${classes}`}
      href={link}
    >
      {text}
    </Link>
  );
}
