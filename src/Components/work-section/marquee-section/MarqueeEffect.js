"use client"
import React from 'react';
import { motion } from 'framer-motion';


const MarqueeEffect = () => {
  return (
    <div className="flex gap-2 whitespace-nowrap">
        <motion.h1  initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className="uppercase text-24/34 font-bold text-blue-color">
        • Quality Assurance | Project Management | Frontend Development | Backend Development | Cloud Services
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:10}} className="uppercase text-24/34 font-bold text-blue-color">
        • Quality Assurance | Project Management | Frontend Development | Backend Development | Cloud Services
        </motion.h1>
      </div>
  );
};

export default MarqueeEffect;
