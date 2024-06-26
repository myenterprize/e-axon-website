
"use client"
import AboutImage from "@/Components/about-section/about-image/AboutImage";
import AboutTitle from "@/Components/about-section/about-title/AboutTitle";
import AboutHero from "@/assets/images/about-image.jpg"
import AboutHerosmall from "@/assets/images/About1.jpg"
// import About from "@/assets/images/About2.jpg"
import Menu from "@/Components/menu/Menu";
import Story from "@/Components/about-section/story-section/Story";
import OurTeam from "@/Components/about-section/team-section/OurTeam";
import AboutCard from "@/Components/about-section/about-card/AboutCard";
import UserSvgTop from "@/assets/svgs/user-icon-top.svg"
import UserSvgBottom from "@/assets/svgs/user-icon-bottom.svg"
import CallToAction from "@/Components/call-to-action/CallToAction";
import FooterSection from "@/Components/footer/Footer";
import { useEffect, useState } from "react";

export default function AboutPage() {
  
  const [image, setImage] = useState(AboutHero);


  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 1024) {
        setImage(AboutHerosmall);
     
      } else {
        setImage(AboutHero);
      
      }
    };

    updateImage(); // Set the initial background image
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);

    return (
     <div className="w-full max-w-[1440px] mx-auto">
      <Menu/>
      <div className="w-full flex flex-col justify-center items-center">
        <AboutTitle title={"About Us"} desc={"We are a group of software developers, passionate about code quality and meeting customer’s needs."} classes='font-bold text-28/39 sm:text-34/48  md:text-47/62 md:font-extrabold'/>
        <AboutImage aboutHero={image}/>
        <Story/>
        <OurTeam/>
        <div className="about-cards w-full pt-[67px] md:pt-[125px] sm:flex sm:justify-center sm:items-center sm:gap-x-[30px] md:mt-10">
          <AboutCard title={"Our Vision"} desc={"To be the preferred partner for businesses seeking efficiency and reliability, guaranteeing that our code not only meets but exceeds industry standards, enduring the test of time."} userBg={"#3CBCC3"} gifShow={false}/>
          <AboutCard title={"Our Mission"} desc={"Crafting robust software solutions tailored for individual needs."} bgColor={"#0B3E66F2"} padding={"45px"} svgImageTop={UserSvgTop} svgImageBottom={UserSvgBottom} gifShow={true}/>
        </div>
        <CallToAction/>
      </div>
      <FooterSection/>
     </div>
    )
  }
  