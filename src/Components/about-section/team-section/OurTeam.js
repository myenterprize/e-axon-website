import React from 'react'
import AboutTitle from '../about-title/AboutTitle'
import AboutImage from '../about-image/AboutImage'
import TeamImage from "@/assets/images/team-image.jpg"

const OurTeam = () => {
  return (
    <>
      <AboutTitle  title={"Large Teams Develop, Small Teams Disrupt"} desc={"We are a small team and we believe ourselves to be the disruptors. We have built our team with a focus on technical excellence and quality. We have devised our own lean methodology, based on trust, openness, and flat hierarchy. The approach has been really beneficial to our clients as we have been able to deliver reliable working solutions, really fast at fraction of the cost of what our bigger competitors would charge"} color={"#EBA63F"}  classes="text-16/22 font-bold sm:text-[22px] md:text-[30px] text-yellow-color lg:text-34/48"/>
      <AboutImage aboutHero={TeamImage}/>
    </>
  )
}

export default OurTeam
