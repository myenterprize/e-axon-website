import AboutImage from "@/Components/about-section/about-image/AboutImage";
import AboutTitle from "@/Components/about-section/about-title/AboutTitle";
import AboutHero from "@/assets/images/about-image.jpg"
import Menu from "@/Components/menu/Menu";
import Story from "@/Components/about-section/story-section/Story";
import OurTeam from "@/Components/about-section/team-section/OurTeam";
import AboutCard from "@/Components/about-section/about-card/AboutCard";
import UserSvgTop from "@/assets/svgs/user-icon-top.svg"
import UserSvgBottom from "@/assets/svgs/user-icon-bottom.svg"

export default function AboutPage() {
    return (
     <>
      <Menu/>
      <div className="w-[full] flex flex-col justify-center items-center">
        <AboutTitle title={"About Us"} desc={"We are a group of software developers, passionate about code quality and meeting customer’s needs."}/>
        <AboutImage aboutHero={AboutHero}/>
        <Story/>
        <OurTeam/>
        <div className="about-cards w-[100%] h-[100vh] flex justify-center items-center gap-x-[30px] mt-10">
          <AboutCard title={"Our Vision"} desc={"To be the preferred partner for businesses seeking efficiency and reliability, guaranteeing that our code not only meets but exceeds industry standards, enduring the test of time."} userBg={"#3CBCC3"}/>
          <AboutCard title={"Our Mission"} desc={"Crafting robust software solutions tailored for individual needs."} bgColor={"#0B3E66F2"} padding={"45px"} svgImageTop={UserSvgTop} svgImageBottom={UserSvgBottom}/>
        </div>
      </div>
     </>
    )
  }
  