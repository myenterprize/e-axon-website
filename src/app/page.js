import Banner from "@/Components/banner/Banner";
import BridgingStrategy from "@/Components/bridging-strategy/BridgingStrategy";
import CallToAction from "@/Components/call-to-action/CallToAction";
import CounterSection from "@/Components/counter-section/CounterSection";
import FooterSection from "@/Components/footer/Footer";
import Menu from "@/Components/menu/Menu";
import Partnership from "@/Components/partnership/Partnership";
import RightChoice from "@/Components/right-choice/RightChoice";
import TrustedBusiness from "@/Components/trusted-business/TrustedBusiness";
import WhatWeDo from "@/Components/what-we-do/WhatWeDo";

export default function Page() {
  return (
    <>
      <Menu />
      <Banner />
      <TrustedBusiness />
      <BridgingStrategy />
      <RightChoice />
      <CounterSection />
      <Partnership />
      <WhatWeDo />
      <CallToAction />
      <FooterSection />
    </>
  )
}
