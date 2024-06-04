"use client";
import React from "react";
import Link from "next/link";

export default function Button({text, link, classes}) {
  return (
    <Link
      className={`bg-P2-900 p-[21px] text-white rounded-[8px] hover:bg-opacity-90 transition-all text-14/18 flex items-center justify-center  ${classes}`}
      href={link}
    >
      {text}
    </Link>
  );
}
